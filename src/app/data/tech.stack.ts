import {angularArray} from "./angular.array";

export enum techStackEnum{
  ANGULAR = 'angular',
  REACT = 'react',
  NODEJS = 'nodejs'
}

export const techStack = {
  [techStackEnum.ANGULAR]: angularArray,
  [techStackEnum.REACT]: [],
  [techStackEnum.NODEJS]: []
} as any
