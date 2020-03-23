class Language {
  name: string;
  level: string;
}

class Framework {
  name: string;
  level: string;
}

class Programming {
  languages: Language[];
  frameworks: Framework[];
}

export class Skills {
  programming: Programming;
}
