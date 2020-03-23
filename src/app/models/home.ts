class Location {
  address: string;
  city: string;
  state: string;
}

class Language {
  name: string;
  proficiency: string;
}
class About {
  name: string;
  email: string;
  phone: string;
  description: string;
  github: string;
  linkedin: string;
  facebook: string;
  location: Location;
  interests: string[];
  languages: Language[];
}

export class Home {
  banner: string;
  about: About;
}
