export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    draft?: boolean;
    hero?: {
      title: string;
      description: string;
      subtitle?: string;
      list?: Array<{
        icon: string;
        title: string;
        description: string;
        button: {
          enable: boolean;
          label: string;
          link: string;
        };
      }>;
    };
    contact_form?: {
      title: string;
      list: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
    all_integration?: { title: string };
    features?: { title: string; description: string };
  };
  content: string;
  slug?: string;
};

export type Post = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    date?: string;
    draft?: boolean;
    featured?: boolean;
  };
  slug?: string;
  content?: string;
};

export type Team = {
  name: string;
  avatar: string;
  content: string;
  designation: string;
  style?: string;
  social: {
    name: string;
    icon: string;
    url: string;
  }[];
};

export type PriceCompare = {
  frontmatter: {
    title: string;
    plans: Array<{
      title: string;
      price: string;
      button: Button;
    }>;
    plans_features: Array<{
      group: string;
      list: Array<{
        value: string;
        basic: boolean | number | null;
        pro: boolean | number | null;
        standard: boolean | number | null;
      }>;
    }>;
  };
};

export type Feature = {
  frontmatter: {
    title: string;
    description: string;
    images: string[];
    list: string[];
    button: Button;
  };
};

export type FeaturesGrid = {
  frontmatter: {
    title: string;
    description?: string;
    list: Array<{
      title: string;
      description: string;
      images?: string[];
      tools_bg?: string;
      tools?: string[];
    }>;
  };
};

export type FeatureCardLayout = {
  frontmatter: {
    title: string;
    description: string;
    list?: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
};

export type Testimonial = {
  frontmatter: {
    subtitle: string;
    title: string;
    button: Button;
    list: Array<{
      title: string;
      featured: boolean;
      content: string;
      customer: {
        name: string;
        avatar: string;
        designation: string;
      };
      list: Array<{
        title: string;
        description: string;
      }>;
    }>;
  };
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

export type PricingSection = {
  frontmatter: {
    title: string;
    description?: string;
    plans_labels: string[];
    discount?: string;
    plans: Array<{
      title: string;
      description?: string;
      price_monthly: string;
      price_yearly: string;
      price_prefix?: string;
      price_description_monthly?: string;
      price_description_yearly?: string;
      features?: string[];
      active?: boolean;
      button?: Button;
    }>;
  };
  content: string;
};

export type Integration = {
  frontmatter: {
    title: string;
    image: string;
    description: string;
    meta_title: string;
    type: string;
    button: Button;
  };
  slug: string;
  content: string;
};

export type Changelog = {
  frontmatter: {
    title: string;
    description: string;
    list: Array<{
      title: string;
      date: string;
      version: string;
      content: string;
    }>;
  };
};
