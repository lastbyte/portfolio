class Language {
  name: string;
  level: number;
}

class Framework {
  name: string;
  level: number;
}

class Programming {
  languages: Language[];
  frameworks: Framework[];
}

export class Skills {
  programming: Programming;
}
