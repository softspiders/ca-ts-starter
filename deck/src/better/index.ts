import { LoggerImpl } from "./LoggerImpl";
import { CounterInteractor } from "./CounterInteractor";

const counter = new CounterInteractor(new LoggerImpl())

counter.increment()
counter.increment()
counter.increment()
