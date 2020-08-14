const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
  day: {
    type:Date,
    default: Date.now
  },
  exercise: [{
  workoutType: {
      type: String,
      required: true,
  },
  workoutName: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  weight: Number,
  sets: Number,
  reps: Number,
  distance: Number
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;