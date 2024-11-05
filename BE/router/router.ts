import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getOneUsers,
  loginUser,
} from "../controller/userController";
import {
  createGoal,
  getAllGoals,
  updateOneGoalStatus,
} from "../controller/goalController";

const router: any = Router();

router.route("/get-one-user/:userID").get(getOneUsers);
router.route("/get-all-users").get(getAllUsers);

router.route("/register-user").get(createUser);
router.route("/login-user").get(loginUser);

//goal endpoints

router.route("/create-goal").get(createGoal);
router.route("/get-all-goals").get(getAllGoals);
router.route("/update-one-goalStatus/:goalID").patch(updateOneGoalStatus);

export default router;
