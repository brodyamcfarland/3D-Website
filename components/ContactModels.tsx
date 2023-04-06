// Task List
// Create a gateway to get to Github, LinkedIn, Twitter, Email from 2-D website

import EmailLaptop from "./EmailLaptop";
import Github from "./Github";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";

const ContactModels = () => {
     return (
          <>
               <EmailLaptop />
               <Github />
               <LinkedIn />
               <Twitter />
          </>
     );
};
export default ContactModels;
