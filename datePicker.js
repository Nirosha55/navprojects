// import React from 'react';
// import {View, DatePicker} from 'react-native';

// const DateComponent = () => {
//     const today = new Date();
//     <DatePicker
//         style={styles.datePicker}
//         date={this.state.date}
//         mode="date"
//         placeholder="select date"
//         format="DD-MM-YYYY"
//         maxDate={today}
//         confirmBtnText="Confirm"
//         cancelBtnText="Cancel"
//         customStyles={{
//             dateIcon: {
//                 position: 'absolute',
//                 left: 0,
//                 top: 4,
//                 marginLeft: 0,
//             },
//             dateInput: {
//                 marginLeft: 36,
//             },
//         }}
//         onDateChange={(date) => this.setState({ date })}
//     />
// }
// export default DateComponent;

// import React, {useState} from 'react';
// import {View, DatePicker} from 'react-native';

// const DateScreen = () => {
//   const [startDate, setStartDate] = useState(null);
//   return (
//     <View>
//       <DatePicker
//         selected={startDate}
//         onChange={date => setStartDate(date)}
//         minDate={new Date()}
//         //  maxDate={addMonths(new Date(), 5)}
//         showDisabledMonthNavigation
//       />
//     </View>
//   );
// };
// export default DateScreen;
