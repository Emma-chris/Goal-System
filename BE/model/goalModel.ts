import { Document, Schema, model } from "mongoose";

interface iGoal {
  title: string;
  duration: string;
  status: String;
}

interface iGoalData extends iGoal, Document {}

const goalModel = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "start",
    },
  },
  { timestamps: true }
);

export default model<iGoalData>("goal", goalModel);
