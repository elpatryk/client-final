import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBid } from "../store/artwork/thunks";
import { selectUser } from "../store/user/selectors";
import { Button, Input } from "../styled";
export default function PostBid() {
  const [form, setForm] = useState(false);
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const profile = useSelector(selectUser);
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(postBid(amount, profile.email));
    console.log(amount, profile.email);
  };
  return (
    <div>
      PostBid:
      <Button
        onClick={() => {
          setForm(!form);
        }}
      >
        {!form ? "New bid?" : "Hide"}
      </Button>
      {!form ? (
        ""
      ) : (
        <div>
          <form onSubmit={submitForm}>
            <Input
              placeholder="give me money"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />{" "}
            <Button type="submit">Bid</Button>
          </form>
        </div>
      )}
    </div>
  );
}
