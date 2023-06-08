import courseNewReducer from "./courseNewSlice";
import myCoursereducer from "./myCourse";
import userReducer from "./userSlice";

export const rootReducer = {
    users: userReducer,
    courseNew: courseNewReducer,
    mycourse: myCoursereducer
}