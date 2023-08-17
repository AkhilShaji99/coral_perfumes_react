import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";
import getUserOrGuestToken from "../../../utils/userOrGuestToken";

const UpdateCheckoutDetails = async (formValues) => {
  try {
   
    const response = await request.post("update_checkout_details/", {
      flat_name:formValues.flat_name,
      street_address:formValues.street_address,
      building_number:formValues.building_number,
      postal_code:formValues.pin,
      phone_number:formValues.phone_number,
      emirate:formValues.emirate,
      phone_number:formValues.phone_number,
      email:formValues.email,
      first_name:formValues.first_name,
      last_name:formValues.last_name,
      delivery_type:formValues.delivery_type,
      address_id:null,


      token: getUserOrGuestToken(),
    });
    if (response.data.status) {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Add Address"}
          message="Address Added."
        />
      ));
    } else {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Add Address"}
          message={response?.data?.message}
        />
      ));
    }
  } catch (error) {
    toast((t) => (
      <AlerMessage
        t={t}
        toast={toast}
        status={false}
        title={"Add Address"}
        message={
          error?.response?.["data"]?.message ||
          "Something went wrong.Please try again."
        }
      />
    ));
    console.log("error", error);
  }
};
export default UpdateCheckoutDetails;
