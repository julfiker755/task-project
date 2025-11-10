"use client"
import { useState } from "react";

type AnyState = Record<string, any>;
type StateUpdater<T extends AnyState> = <K extends keyof T>(
  key: K,
  value: T[K]
) => void;

export function useGlobalState<T extends AnyState>(
  initialState: T
): [T, StateUpdater<T>] {
  const [state, _setState] = useState<T>(initialState);

  const setState: StateUpdater<T> = (key, value) => {
    _setState((prev) => ({ ...prev, [key]: value }));
  };

  return [state, setState];
}
