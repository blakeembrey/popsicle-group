declare function popsicleGroup (): popsicleGroup.Group;

declare namespace popsicleGroup {
  export interface Group {
    (req: any, next: () => any): any;
    abort (): void;
    active (): number;
  }
}

export = popsicleGroup;
