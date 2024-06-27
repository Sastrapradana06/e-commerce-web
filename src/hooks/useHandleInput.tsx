"use client";

import { useState } from "react";

export default function useHandleInput(initialState: any) {
  const [data, setData] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const clearInput = () => {
    setData(initialState);
  };

  const editData = (state: any) => {
    setData(state);
  };

  return { data, handleChange, clearInput, editData };
}
