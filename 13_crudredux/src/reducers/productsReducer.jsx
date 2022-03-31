//cada reducer tem seu proprio estado

const initalState = {
  products: [],
  error: null,
  loading: false,
};

export default function (state = initalState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
