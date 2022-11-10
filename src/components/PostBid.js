import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectById } from "../store/artwork/selectors";
import { postBid } from "../store/artwork/thunks";
import { selectToken, selectUser } from "../store/user/selectors";
import { Button, Input } from "../styled";
export default function PostBid() {
  const [form, setForm] = useState(false);
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();
  const profile = useSelector(selectUser);
  const details = useSelector(selectById);
  const token = useSelector(selectToken);
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(postBid(amount, profile.email, details.id));
    console.log(amount, profile.email);
    console.log(token);
  };
  return (
    <div>
      {!token ? (
        ""
      ) : (
        <div>
          {" "}
          PostBid
          <Button
            onClick={() => {
              setForm(!form);
            }}
          >
            {!form ? "New bid?" : "Hide"}
          </Button>{" "}
        </div>
      )}
      {!form ? (
        ""
      ) : (
        <div>
          <form onSubmit={submitForm}>
            <Input
              min={details.minimumBid}
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
