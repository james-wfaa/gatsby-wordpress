import { at } from "lodash";

const initialState = {
  searchstring: "",
  currentStep: 1,
  numberOfSteps: [1, 2, 8],
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
    addressType: 'Home',
    country: 'US',
    streetAddress: '',
    streetAddressLineTwo: '',
    city: '',
    state: '',
    zipcode: '',
    seasonalResidence: false,
    seasonalAddressType: 'Home',
    seasonalCountry: 'US',
    seasonalStreetAddress: '',
    seasonalStreetAddressLineTwo: '',
    seasonalCity: '',
    seasonalState: '',
    seasonalZipcode: '',
  },
  phoneInfo: {
    phoneType1: 'home',
    phoneNumber1: '',
    phoneType2: 'mobile',
    phoneNumber2: '',
    phoneType3: 'work',
    phoneNumber3: '',
  },
  employmentInfo: {
    businessName: '',
    jobTitle: '',
    startDate: '',
    streetAddress: '',
    streetAddressLineTwo: '',
    city: '',
    state: '',
    zipcode: '',
  },
  identityInfo: {
    identity: '',
    originCountry: '',
    identitydescrip: '',
  },
  spouseInfo: {
    firstname: '',
    lastname: '',
    undergrad: '',
    update: '',
  },
};
const types = {
  SET_SEARCH_STRING: "SET_SEARCH_STRING",
  SET_CURRENT_STEP: "SET_CURRENT_STEP",
  SET_NUMBER_OF_STEPS_ADD: "SET_NUMBER_OF_STEPS_ADD",
  SET_NUMBER_OF_STEPS_DELETE: "SET_NUMBER_OF_STEPS_DELETE",
  SET_CONTACT_INFO: "SET_CONTACT_INFO",
  SET_CONTACT_INFO_ONCHANGE: "SET_CONTACT_INFO_ONCHANGE",
  SET_ADDRESS_STEP: "SET_ADDRESS_STEP",
  SET_PHONE_STEP: "SET_PHONE_STEP",
  SET_EMPLOYMENT_STEP: "SET_EMPLOYMENT_STEP",
  SET_IDENTITY_STEP: "SET_IDENTITY_STEP",
  SET_LIFE_EVENT_STEP: "SET_LIFE_EVENT_STEP",
  SET_MAILING_ADDRESS: "SET_MAILING_ADDRESS",
  SET_MAILING_ADDRESS_ONCHANGE: "SET_MAILING_ADDRESS_ONCHANGE",
  SET_PHONE_INFO: "SET_PHONE_INFO",
  SET_PHONE_INFO_ONCHANGE: "SET_PHONE_INFO_ONCHANGE",
  SET_PHONE_TYPE: "SET_PHONE_TYPE",
  SET_EMPLOYMENT_INFO: "SET_EMPLOYMENT_INFO",
  SET_EMPLOYMENT_INFO_ONCHANGE: "SET_EMPLOYMENT_INFO_ONCHANGE",
  SET_IDENTITY_INFO: "SET_IDENTITY_INFO",
  SET_IDENTITY_INFO_ONCHANGE: "SET_IDENTITY_INFO_ONCHANGE",
  SET_SPOUSE_INFO: "SET_SPOUSE_INFO",
  SET_SPOUSE_INFO_ONCHANGE: "SET_SPOUSE_INFO_ONCHANGE",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_STRING:
      return {
        ...state,
        searchstring: action.payload,
      };
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
    case types.SET_CONTACT_INFO:
      return {
        ...state,
        contactInfo: {
          firstname: action.payload.firstname ? action.payload.firstname : '',
          lastname: action.payload.lastname ? action.payload.lastname : '',
          othernames: action.payload.othernames ? action.payload.othernames : '',
          email: action.payload.email ? action.payload.email : '',
          phone: action.payload.phone ? action.payload.phone : '',
          undergrad: action.payload.undergrad ? action.payload.undergrad : '',
          postgrad: action.payload.postgrad ? action.payload.postgrad : '',
        },
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
    case types.SET_MAILING_ADDRESS:
      return {
        ...state,
        mailingAddress: {
          addressType: action.payload.addressType ? action.payload.addressType : '',
          country: action.payload.country ? action.payload.country : '',
          streetAddress: action.payload.streetAddress ? action.payload.streetAddress : '',
          streetAddressLineTwo: action.payload.streetAddressLineTwo ? action.payload.streetAddressLineTwo : '',
          city: action.payload.city ? action.payload.city : '',
          state: action.payload.state ? action.payload.state : '',
          zipcode: action.payload.zipcode ? action.payload.zipcode : '',
        },
      };
    case types.SET_MAILING_ADDRESS_ONCHANGE:
      return {
        ...state,
        mailingAddress: {
          ...state.mailingAddress,
          [action.payload[0]]: action.payload[1],
        },
      };
    case types.SET_PHONE_INFO:
      return {
        ...state,
        phoneInfo: {
          phoneType1: action.payload.phoneType1 ? action.payload.phoneType1 : '',
          phoneNumber1: action.payload.phoneNumber1 ? action.payload.phoneNumber1 : '',
          phoneType2: action.payload.phoneType2 ? action.payload.phoneType2 : '',
          phoneNumber2: action.payload.phoneNumber2 ? action.payload.phoneNumber2 : '',
          phoneType3: action.payload.phoneType3 ? action.payload.phoneType3 : '',
          phoneNumber3: action.payload.phoneNumber3 ? action.payload.phoneNumber3 : '',
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
    case types.SET_SPOUSE_INFO_ONCHANGE:
      return {
        ...state,
        spouseInfo: {
          ...state.spouseInfo,
          [action.payload[0]]: action.payload[1],
        },
      };
      
      
    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, types, reducer };
