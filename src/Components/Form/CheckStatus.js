import {
  Button,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";
import moment from "moment";

const CheckStatus = ({ checkStatus, isClicked, setIsClicked }) => {
  const handleClose = () => {
    setIsClicked(false);
  };
  return (
    <div>
      <Dialog open={isClicked}>
        <DialogTitle sx={{ textAlign: "center" }}>Booking Status</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {checkStatus?.map((item) => (
              <div key={item._id}>
                <div>Departure : {item.departureTerminal}</div>
                <div>Arrival : {item.arrivalTerminal}</div>
                <div>BookingCode : {item.bookingCode}</div>
                <div>PhoneNumber : {item.phoneNumber}</div>
                <div>NextofKinPhoneNumber : {item.nextOfKinNumber}</div>
                <div>NextofKinName : {item.nextOfKinName}</div>
                <div>Email : {item.email}</div>
                <div>FullName : {item.fullName}</div>
                <div>Date :{moment(item.date).format("ddd Do MMM YYYY")}</div>
                <div>Adults : {item.adults}</div>
                <div>Seat(s) : {item.bookedSeat.join(" , ")}</div>
              </div>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CheckStatus;
