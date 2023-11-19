import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditPage = () => {
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then(({ data }) => {
      console.log(data);
    });
  }, [id]);
  return <div>EditPage</div>;
};

export default EditPage;
