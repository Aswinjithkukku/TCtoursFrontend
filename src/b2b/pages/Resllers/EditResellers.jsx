import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleReseller } from "../../../redux/slices/resellerSlice";
import DetailsEditForm from "../../components/Resellers/DetailsEditForm";

function EditResellers() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const { reseller, loading } = useSelector((state) => state.resellers);

  useEffect(() => {
    dispatch(fetchSingleReseller(id));
  }, [dispatch]);

  return (
    <div className="">
      <div className="p-2">
        <div className=" mt-2">
          <DetailsEditForm />
        </div>
      </div>
    </div>
  );
}

export default EditResellers;
