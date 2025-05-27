import eye from "../assets/schedule/eye.svg";
import syringe from "../assets/schedule/syringe.svg";
import heart from "../assets/schedule/heart.svg";
import doctor from "../assets/schedule/doctor.svg";

export const appointments = [
  {
    day: "Thrusday",
    data: [
      {
        task: "Health checkup complete",
        asset: syringe,
        time: "11:00 AM",
      },
      {
        task: "Opthalomogist",
        asset: eye,
        time: "14:00 PM",
      },
    ],
  },
  {
    day: "Saturday",
    data: [
      {
        task: "Cardiologist",
        asset: heart,
        time: "12:00 AM",
      },
      {
        task: "Neurologist",
        asset: doctor,
        time: "16:00 PM",
      },
    ],
  },
];
