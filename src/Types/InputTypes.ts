import { type } from "os";
import React from "react";

export type CardInputText = {
  cardInput: {
    ref: string;
    label: string;
  };
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type CardInputNumber = {
  cardInput: {
    ref: string;
    label: string;
  };
  value: number;
  onChange: (e: React.ChangeEvent) => void;
}