import passport from "passport";
import routes from "../routes";
import User from "../models/User";
import events from "../events";
import io from "../server";
import { sockets } from "../socketController";

const superBroadcast = (event, data) => io.emit(event, data);
const sendPlayerUpdate = () => superBroadcast(events.playerUpdate, { sockets });

export const home = (req, res) => {
  try {
    res.render("home", {
      pageTitle: "home",
      events: JSON.stringify(events),
      users: sockets,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSignUp = (req, res) => {
  try {
    res.render("signUp", {
      pageTitle: "signUp",
      events: JSON.stringify(events),
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postSignUp = async (req, res, next) => {
  const {
    body: { username, email, password, password2 },
    file,
  } = req;

  if (password !== password2) {
    res.status(400);
    res.redirect(routes.home);
  }
  try {
    const user = await User({
      username,
      email,
      avatarUrl: file ? file.path : null,
    });
    await User.register(user, password);
    next();
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  try {
    res.render("Login", { pageTitle: "Login", events: JSON.stringify(events) });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
});

export const notifyLogin = async (req, res) => {
  const {
    user: { id },
  } = req;
  const newUser = await User.findById(id);
  const username = newUser.username;
  io.once("connection", (socket) => {
    io.to(socket.id).emit(events.login, { username });
    socket.broadcast.emit(events.newUser, { username });
  });

  sendPlayerUpdate();
  res.redirect(routes.home);
};

export const logout = async (req, res) => {
  const {
    user: { id },
  } = req;
  const logoutUser = await User.findById(id);
  const itemIdx = sockets.findIndex(
    (aSocket) => aSocket.username === logoutUser.username
  );
  if (itemIdx > -1) sockets.splice(itemIdx, 1);
  io.emit(events.disconnected, { username: logoutUser.username });
  sendPlayerUpdate();

  req.logout();
  res.redirect(routes.home);
};
