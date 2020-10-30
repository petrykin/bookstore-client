import * as actions from '../actions/booksActions';

export const initialState: BooksState = {
  books: [
    {
      'isbn': '9780201485677',
      'title': 'Refactoring: Improving the Design of Existing Code',
      'price': 50.93,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque. Vel orci porta non pulvinar.',
      'coverUrl': 'https://images-na.ssl-images-amazon.com/images/I/415rwKnmemL._SX392_BO1,204,203,200_.jpg',
      'quantity': 10,
      'available': true,
      'author': {
        'name': 'Martin, Fowler'
      }
    },
    {
      'isbn': '9781839211966',
      'title': 'Get Your Hands Dirty on Clean Architecture',
      'price': 24.99,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque. Vel orci porta non pulvinar.',
      'coverUrl': 'https://d2sofvawe08yqg.cloudfront.net/get-your-hands-dirty-on-clean-architecture/hero?1580366612',
      'quantity': 10,
      'available': true,
      'author': {
        'name': 'Tom, Hombergs'
      }
    },
    {
      'isbn': '9780321127426',
      'title': 'Patterns of Enterprise Application Architecture',
      'price': 63.91,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque. Vel orci porta non pulvinar.',
      'coverUrl': 'https://images-na.ssl-images-amazon.com/images/I/51X+r+OdV3L._SX397_BO1,204,203,200_.jpg',
      'quantity': 10,
      'available': true,
      'author': {
        'name': 'Martin, Fowler'
      }
    },
    {
      'isbn': '9780201895421',
      'title': 'Analysis Patterns: Reusable Object Models',
      'price': 24.55,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque. Vel orci porta non pulvinar.',
      'coverUrl': 'https://images-na.ssl-images-amazon.com/images/I/51Pp1zgneWL._SX394_BO1,204,203,200_.jpg',
      'quantity': 5,
      'available': true,
      'author': {
        'name': 'Martin, Fowler'
      }
    },
    {
      'isbn': '9781789613476',
      'title': 'Microservices with Spring Boot and Spring Cloud',
      'price': 63,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque. Vel orci porta non pulvinar.',
      'coverUrl': 'https://images-na.ssl-images-amazon.com/images/I/515e7uyNIUL._SX403_BO1,204,203,200_.jpg',
      'quantity': 1,
      'available': true,
      'author': {
        'name': 'Magnus, Larrson'
      }
    },
    {
      'isbn': '9781617292545',
      'title': 'Spring Boot in Action',
      'price': 38.87,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque. Vel orci porta non pulvinar.',
      'coverUrl': 'https://images-na.ssl-images-amazon.com/images/I/41Mno4eQFkL._SX396_BO1,204,203,200_.jpg',
      'quantity': 10,
      'available': true,
      'author': {
        'name': 'Craig, Walls'
      }
    }
  ],
  loading: false,
  hasErrors: false
};

const booksReducer = (state: BooksState = initialState, action: BooksAction): BooksState => {
  switch (action.type) {
    case actions.GET_BOOKS:
      return {
        ...state,
        loading: true
      };

    case actions.GET_BOOKS_SUCCESS:
      return {
        books: action.payload,
        loading: false,
        hasErrors: false
      };

    case actions.GET_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true
      };

    default:
      return state;
  }
};

export default booksReducer;