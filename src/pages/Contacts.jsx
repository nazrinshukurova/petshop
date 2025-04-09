import React from "react";
import contact1 from "../assets/contacts-01.png";
import ImageBox from "../shared/ImageBox/Image_box";
import Form from "../components/Registration/Registration";

const Contacts = ({ src }) => {
  return (
    <div>
      <ImageBox src={contact1} />
      <Form/>
    </div>
  );
};

export default Contacts;
