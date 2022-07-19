import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Base_Url = "https://dodgeqr.prometteur.in/api";
// export const  localStorage.getItem("token") = localStorage.getItem(" localStorage.getItem("token")");

//get subcategory list

//update or add functionality for Subcategory
export const UpdateAddSubcategory = (values, id) => {
  console.log("values ", values);
  //   console.log("ids " , id)
  if (id) {
    console.log("id is here");
    axios
      .patch(`${Base_Url}/subcategory/${id}`, values, {
        headers: {
          Authorization:  localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        toast.success("sub_Category updatesd successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("failed to Update  Sub category ");
      });
  } else {
    axios
      .post(`${Base_Url}/subcategory`, values, {
        headers: {
          Authorization:  localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        toast.success("sub_Category added successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("failed to add sub category");
      });
  }
};

//delete Subcategory
export const RemoveSubcategory = (id) => {
  console.log("subcategory id ", id);

  axios
    .delete(`${Base_Url}/subcategory/${id}`, {
      headers: {
        Authorization:  localStorage.getItem("token"),
      },
    })
    .then((res) => {
      toast.success("category is Succesfully deleted");
    })
    .catch((err) => {
      console.log(err);
    });
};

//update or add functionality for Messgae
export const UpdateAddMessages = (values, id) => {
  // console.log("values is commen component " ,values)
  // console.log("id in component " , id)
  if (!id) {
    axios
      .post(`${Base_Url}/message`, values, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // setMessageList([...messageslist, res.data]);
        console.log(res.data);
        toast.success("message added Successfully");
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("failed to add message");
      });
    // ("");
  } else {
    axios
      .patch(`${Base_Url}/message/${id}`, values, {
        headers: {
          Authorization:  localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // setMessageList([...messageslist, res.data]);
        toast.success("Updated Successfully");
        console.log(res.data);
      })
      .catch((err) => {
        toast.error("failed to update message");
      });
  }
};

//delete Message
export const RemoveMessage = (id) => {
  // console.log(id)
  axios
    .delete(`https://dodgeqr.prometteur.in/api/message/${id}`, {
      headers: {
        Authorization:  localStorage.getItem("token"),
      },
    })
    .then((res) => {
      toast.success("deleted Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

//update or add functionality for Package
export const UpdateAddPackages = (values, id) => {
  // console.log("values is commen component " ,values)
  // console.log("id in component " , id)
  if (id) {
    axios
      .patch(`${Base_Url}/admin/package/${id}`, values, {
        headers: {
          Authorization:  localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // setMessageList([...messageslist, res.data]);
        toast.success("Updated Successfully");
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("failed to update");
      });
  } else {
    axios
      .post(`${Base_Url}/admin/package`, values, {
        headers: {
          Authorization:  localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // setManagePackage(res.data);
        console.log( localStorage.getItem("token"));
        toast.success("Added Successfully");
      })
      .catch((err) => {
        console.log(err);
        console.log( localStorage.getItem("token"));
      });
  }
};

//delete package
export const RemovePackage = (id) => {
  console.log("hello id is here ", id);
  axios
    .delete(`${Base_Url}/admin/package/${id}`, {
      headers: {
        Authorization:  localStorage.getItem("token"),
      },
    })
    .then((res) => {
      toast.success("deleted Successfully");
    })
    .catch((err) => {
      console.log(err);
      toast.error("failed to delete");
    });
};
