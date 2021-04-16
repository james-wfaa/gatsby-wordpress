//import { at } from "lodash";

const initialState = {
  searchstring: "",
  membershipGraduate: null,
  membershipAge: null,
  membershipType: null,
  //Start Update Info Form 
  currentStep: 1,
  numberOfSteps: [1, 2, 8, 9],
  contactInfo: {
    firstname: '',
    lastname: '',
    othernames: '',
    email: '',
    phone: '',
    undergrad: '',
    postgrad: '',
  },
  addressStep: false,
  phoneStep: false,
  employmentStep: false,
  identityStep: false,
  lifeEventStep: false,
  mailingAddress: {
    country: 'US',
    streetAddress: '',
    streetAddressLineTwo: '',
    city: '',
    state: '',
    zipcode: '',
    seasonalResidence: '',
    seasonalStartDate: '',
    seasonalEndDate: '',
    seasonalCountry: 'US',
    seasonalStreetAddress: '',
    seasonalStreetAddressLineTwo: '',
    seasonalCity: '',
    seasonalState: '',
    seasonalZipcode: '',
  },
  phoneInfo: {
    phoneType1: 'Home',
    phoneNumber1: '',
    phoneType2: 'Personal Cellular/Mobile',
    phoneNumber2: '',
    phoneType3: 'Work/Business',
    phoneNumber3: '',
    seasonalPhoneStartDate: '',
    seasonalPhoneEndDate: '',
  },
  employmentInfo: {
    businessName: '',
    jobTitle: '',
    startDate: '',
    businessStreetAddress: '',
    businessStreetAddressLineTwo: '',
    businessCity: '',
    businessState: '',
    businessZipcode: '',
    businessCountry: 'US',
  },
  identityInfo: {
    identity: [],
    originCountry: '',
    identitydescrip: '',
  },
  spouseInfo: {
    spouseFirstname: '',
    spouseLastname: '',
    spouseUndergrad: '',
    spousePostgrad: '',
    spouseUpdate: '',
    uwGrad: false,
  },
  commSignUpInfo: {
    firstname: '',
    lastname: '',
    email: '',
  },
  communicationsSignUp: [],
  entry_id: null,
  initialState: null,
  //End Update Info Form 
};
const types = {
  SET_SEARCH_STRING: "SET_SEARCH_STRING",
  SET_MEMBERSHIP_GRADUATE: "SET_MEMBERSHIP_GRADUATE",
  SET_MEMBERSHIP_AGE: "SET_MEMBERSHIP_AGE",
  SET_MEMBERSHIP_TYPE: "SET_MEMBERSHIP_TYPE",

  //Start Update Info Form 
  SET_CURRENT_STEP: "SET_CURRENT_STEP",
  SET_NUMBER_OF_STEPS_ADD: "SET_NUMBER_OF_STEPS_ADD",
  SET_NUMBER_OF_STEPS_DELETE: "SET_NUMBER_OF_STEPS_DELETE",
  SET_CONTACT_INFO_ONCHANGE: "SET_CONTACT_INFO_ONCHANGE",
  SET_ADDRESS_STEP: "SET_ADDRESS_STEP",
  SET_PHONE_STEP: "SET_PHONE_STEP",
  SET_EMPLOYMENT_STEP: "SET_EMPLOYMENT_STEP",
  SET_IDENTITY_STEP: "SET_IDENTITY_STEP",
  SET_LIFE_EVENT_STEP: "SET_LIFE_EVENT_STEP",
  SET_MAILING_ADDRESS_ONCHANGE: "SET_MAILING_ADDRESS_ONCHANGE",
  SET_PHONE_INFO_ONCHANGE: "SET_PHONE_INFO_ONCHANGE",
  SET_PHONE_TYPE: "SET_PHONE_TYPE",
  SET_EMPLOYMENT_INFO: "SET_EMPLOYMENT_INFO",
  SET_EMPLOYMENT_INFO_ONCHANGE: "SET_EMPLOYMENT_INFO_ONCHANGE",
  SET_IDENTITY_INFO: "SET_IDENTITY_INFO",
  SET_IDENTITY_INFO_ONCHANGE: "SET_IDENTITY_INFO_ONCHANGE",
  SET_SPOUSE_INFO: "SET_SPOUSE_INFO",
  SET_SPOUSE_INFO_ONCHANGE: "SET_SPOUSE_INFO_ONCHANGE",
  SET_COMM_SIGNUP_INFO: "SET_COMM_SIGNUP_INFO",
  SET_COMMUNICATIONS_SIGNUP_ONCHANGE: "SET_COMMUNICATIONS_SIGNUP_ONCHANGE",
  SET_ENTRY_ID: "SET_ENTRY_ID",
  SET_INITIAL_STATE: "SET_INITIAL_STATE"
  //End Update Info Form 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_STRING:
      return {
        ...state,
        searchstring: action.payload,
      };
    case types.SET_MEMBERSHIP_GRADUATE:
      return {
        ...state,
        membershipGraduate: action.payload,
      };
    case types.SET_MEMBERSHIP_AGE:
      return {
        ...state,
        membershipAge: action.payload,
      };
    case types.SET_MEMBERSHIP_TYPE:
      return {
        ...state,
        membershipType: action.payload,
      };
      
    //Start Update Info Form 
    case types.SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    case types.SET_NUMBER_OF_STEPS_ADD:
      return {
        ...state,
        numberOfSteps: action.payload
      };
    case types.SET_NUMBER_OF_STEPS_DELETE:
      return {
        ...state,
        numberOfSteps: [...state.numberOfSteps.filter(step => step !== action.payload)]
      };
    case types.SET_CONTACT_INFO_ONCHANGE:
      return {
        ...state,
        contactInfo: {
          ...state.contactInfo,
          [action.payload[0]]: action.payload[1],
        },
      };
    case types.SET_ADDRESS_STEP:
      return {
        ...state,
        addressStep: action.payload,
      };
    case types.SET_PHONE_STEP:
      return {
        ...state,
        phoneStep: action.payload,
      };
    case types.SET_EMPLOYMENT_STEP:
      return {
        ...state,
        employmentStep: action.payload,
      };
    case types.SET_IDENTITY_STEP:
      return {
        ...state,
        identityStep: action.payload,
      };
    case types.SET_LIFE_EVENT_STEP:
      return {
        ...state,
        lifeEventStep: action.payload,
      };
    case types.SET_MAILING_ADDRESS_ONCHANGE:
      return {
        ...state,
        mailingAddress: {
          ...state.mailingAddress,
          [action.payload[0]]: action.payload[1],
        },
      };
    case types.SET_PHONE_INFO_ONCHANGE:
      return {
        ...state,
        phoneInfo: {
          ...state.phoneInfo,
          [action.payload[0]]: action.payload[1],
        },
      };
    case types.SET_EMPLOYMENT_INFO:
      return {
        ...state,
        employmentInfo: {
          businessName: action.payload.businessName ? action.payload.businessName : '',
          jobTitle: action.payload.jobTitle ? action.payload.jobTitle : '',
          startDate: action.payload.startDate ? action.payload.startDate : '',
          streetAddress: action.payload.streetAddress ? action.payload.streetAddress : '',
          streetAddressLineTwo: action.payload.streetAddressLineTwo ? action.payload.streetAddressLineTwo : '',
          city: action.payload.city ? action.payload.city : '',
          state: action.payload.state ? action.payload.state : '',
          zipcode: action.payload.zipcode ? action.payload.zipcode : '',

        },
      };
    case types.SET_EMPLOYMENT_INFO_ONCHANGE:
      return {
        ...state,
        employmentInfo: {
          ...state.employmentInfo,
          [action.payload[0]]: action.payload[1],
        },
      };
    case types.SET_IDENTITY_INFO:
      return {
        ...state,
        identityInfo: {
          identity: action.payload.identity ? action.payload.identity : '',
          originCountry: action.payload.originCountry ? action.payload.originCountry : '',
          identitydescrip: action.payload.identitydescrip ? action.payload.identitydescrip : '',
        },
      };
    case types.SET_IDENTITY_INFO_ONCHANGE:
      return {
        ...state,
        identityInfo: {
          ...state.identityInfo,
          [action.payload[0]]: action.payload[1],
        },
      };
    case types.SET_SPOUSE_INFO:
      return {
        ...state,
        spouseInfo: {
          firstname: action.payload.firstname ? action.payload.firstname : '',
          lastname: action.payload.lastname ? action.payload.lastname : '',
          undergrad: action.payload.undergrad ? action.payload.undergrad : '',
          update: action.payload.update ? action.payload.update : '',
        },
      };
    case types.SET_COMM_SIGNUP_INFO:
      return {
        ...state,
        commSignUpInfo: {
          firstname: action.payload.firstname ? action.payload.firstname : '',
          lastname: action.payload.lastname ? action.payload.lastname : '',
          email: action.payload.email ? action.payload.email : '',
        },
      };
    case types.SET_SPOUSE_INFO_ONCHANGE:
      return {
        ...state,
        spouseInfo: {
          ...state.spouseInfo,
          [action.payload[0]]: action.payload[1],
        },
      };
    case types.SET_COMMUNICATIONS_SIGNUP_ONCHANGE:
      return {
        ...state,
        communicationsSignUp: action.payload,
      };
    case types.SET_ENTRY_ID:
      return {
        ...state,
        entry_id: action.payload,
      };
    case types.SET_INITIAL_STATE:
      return {
        ...state,
        initialState: action.payload,
      };
    
    //End Update Info Form 
      
    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, types, reducer };
