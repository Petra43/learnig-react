import { type } from "os";
import React from "react";

export type CardInputText = {
  cardInput: {
    ref: string,
    label: string,
  },
  value: string,
  onChange: (value: string, inputRef: string) => void,
}

export type CardInputNumber = {
  cardInput: {
    ref: string,
    label: string,
  };
  value: number,
  onChange: (value: string, inputRef: string) => void,
}