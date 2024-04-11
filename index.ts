/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/quotes */
import express, { NextFunction, Request, Response } from "express";
import MessageResponse from "../interfaces/MessageResponse";
import { passport } from "../passport/index";
import { randomUUID } from "crypto";

const arandom = randomUUID();

// FIVEM
import CitizenFXProvider from "../utils/fivem";
const authFivem = new CitizenFXProvider();

import fs from "fs";

const router = express.Router();

const log = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.cookies);
  console.log(req.query);

  next();
};

router.get<{}, MessageResponse>("/", log, (req, res) => {
  let user = req.user as any;
  console.log({ user });
  res.json({
    message: `${user?.username}`,
  });
});

router.post("/auth/local", log, passport.authenticate("local"), (req, res) => {
  console.log(req.session, req.sessionID);
  fs.writeFileSync(
    "./db.json",
    JSON.stringify({ session: req.sessionID }, null, 2)
  );
  res.json({ auth: true, session: req.user });
});

router.get(
  "/auth/discord/callback",
  log,
  passport.authenticate("discord"),
  (req, res) => {
    console.log(req.session, req.sessionID);
    res.json({ auth: true, session: req.user });
  }
);

router.get("/auth/fivem", (req, res) => {
  const getURLFIVEM = authFivem.getAuthURL(
    "http://localhost:5100/api/v1/auth/fivem/callback",
    arandom
  );

  console.log({ cookies: req.cookies });

  res.json({
    data: getURLFIVEM,
  });
});

router.get("/auth/fivem/callback", log, async (req, res) => {
  console.log({ url: req.url });
  console.log({ cookies: req.cookies });
  //@ts-ignore
  const access_token = await authFivem.processCallback(
    "http://localhost:5100/api/v1/auth/fivem/callback",
    arandom,
    "http://localhost:5100/api/v1" + req.url
  );

  console.log(access_token);

  const user = await authFivem.getUserInfo(access_token.access_token!)
  
  res.json({
    data: user,
  });
});

export default router;
