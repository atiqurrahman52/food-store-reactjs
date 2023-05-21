import banana from "../../assets/images/shop/banana.webp";
import cucumber from "../../assets/images/shop/cucumber.webp";
import pepper from "../../assets/images/shop/pepper.webp";
import grape from "../../assets/images/shop/grape.webp";
import pineApple from "../../assets/images/shop/pine-apple.webp";
import coconut from "../../assets/images/shop/coconut.webp";
import broccoli from "../../assets/images/shop/broccoli.webp";
import carrot from "../../assets/images/shop/carrot.webp";
import bean from "../../assets/images/shop/bean.webp";

const productData = [
  {
    id: 0,
    img: banana,
    gallery: [banana,banana,banana,banana,banana],
    productName: "Vegan Thai Banana",
    dateCreated: "May 23, 2023",
    numberOfSell: 12,
    isFeatured: true,
    rating: 3,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 34,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
  {
    id: 1,
    img: cucumber,
    gallery: [cucumber,cucumber,cucumber,cucumber,cucumber],
    productName: "Fresh Cucumber",
    dateCreated: "May 1, 2022",
    numberOfSell: 20,
    isFeatured: false,
    rating: 5,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 24,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 1,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 2,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
  {
    id: 2,
    img: pepper,
    gallery: [pepper,pepper,pepper,pepper,pepper],
    productName: "Red Capsicum",
    dateCreated: "May 23, 2023",
    numberOfSell: 12,
    isFeatured: true,
    rating: 3.5,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 14,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 1,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
  {
    id: 3,
    img: grape,
    gallery: [grape,grape,grape,grape,grape],
    productName: "Juicy Grapes",
    dateCreated: "May 19, 2023",
    numberOfSell: 22,
    isFeatured: false,
    rating: 4,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 20,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 1,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
  {
    id: 4,
    img: pineApple,
    gallery: [pineApple,pineApple,pineApple,pineApple,pineApple],
    productName: "Pine Apple",
    dateCreated: "March 23, 2023",
    numberOfSell: 27,
    isFeatured: true,
    rating: 4,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 24,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 1,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
  {
    id: 5,
    img: coconut,
    gallery: [
      coconut, coconut, coconut, coconut, coconut
    ],
    productName: "Fresh Coconut",
    dateCreated: "March 17, 2023",
    numberOfSell: 20,
    isFeatured: true,
    rating: 4,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 34,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 1,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
  {
    id: 6,
    img: broccoli,
    gallery: [broccoli,broccoli,broccoli,broccoli,broccoli],
    productName: "Organic Broccoli Sliced",
    dateCreated: "March 15, 2023",
    numberOfSell: 8,
    isFeatured: false,
    rating: 4,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 34,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 1,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
  {
    id: 7,
    img: carrot,
    gallery: [carrot,carrot,carrot,carrot,carrot],
    productName: "Vegan Red Carrot",
    dateCreated: "May 13, 2023",
    numberOfSell: 10,
    isFeatured: true,
    rating: 4,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 34,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 1,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
  {
    id: 8,
    img: bean,
    gallery: [bean, bean, bean, bean, bean],
    productName: "Vegan Green Bean",
    dateCreated: "May 23, 2023",
    numberOfSell: 2,
    isFeatured: false,
    rating: 4,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 34,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 1,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
];

export default productData;
