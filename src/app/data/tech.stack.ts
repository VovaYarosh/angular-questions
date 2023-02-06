import {angularArray} from "./angular.array";
import {reactArray} from "./react.array";
import {nodejsArray} from "./nodejs.array";
import {Question} from "../question.interface";

export enum techStackEnum {
  ANGULAR = 'angular',
  REACT = 'react',
  NODEJS = 'nodejs'
}

export type TechStackType = {
  [key in techStackEnum]: Question[]
}

export const techStack = {
  [techStackEnum.ANGULAR]: angularArray,
  [techStackEnum.REACT]: reactArray,
  [techStackEnum.NODEJS]: nodejsArray
} as TechStackType



