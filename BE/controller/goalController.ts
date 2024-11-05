import { Request, Response } from "express";
import goalModel from "../model/goalModel";

export const createGoal = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title, duration } = req.body;

    const user = await goalModel.create({ title, duration });

    return res.status(201).json({
      message: "goal created",
      status: 201,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      data: error,
      status: 404,
    });
  }
};

export const getAllGoals = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users = await goalModel.find();
    return res.status(200).json({
      message: "goals Found",
      status: 200,
      data: users,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      data: error,
      status: 404,
    });
  }
};

export const updateOneGoalStatus = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { goalID } = req.params;
    const { status } = req.body;

    const goal = await goalModel.findByIdAndUpdate(
      goalID,
      {
        status,
      },
      { new: true }
    );

    return res.status(201).json({
      message: "goal updated",
      status: 201,
      data: goal,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error",
      data: error,
      status: 404,
    });
  }
};
