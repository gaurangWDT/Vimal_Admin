// import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
// import React from 'react';

// const RequirementScreen = () => {
//   return (
//     <View>
//       <Text style={styles.mainText}>Chem Expo, 2023</Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button}>
//           <Image
//             source={require('../assets/mainscreen5.png')}
//             style={styles.iconImage}
//           />
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button}>
//           <Image
//             source={require('../assets/mainscreen4.png')}
//             style={styles.iconImage}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default RequirementScreen;

// const styles = StyleSheet.create({
//   button: {
//     marginLeft: 10,
//     backgroundColor: 'transparent',
//     padding: 10,
//   },
//   iconImage: {
//     width: 30,
//     height: 29,
//     resizeMode: 'contain',
//   },
//   buttonContainer: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//     flexDirection: 'row',
//   },
//   mainText: {
//     position: 'absolute',
//     top: 20,
//     left: 20,
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: '#000000',
//   },
// });

import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const RequirementScreen = () => {
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 10; // Number of items to display per page
  const totalItems = 15; // Total number of items

  // Generate dummy data for the table
  const generateTableData = () => {
    const tableData = [
      {
        srNo: 1,
        companyName: 'Company 1',
        cam: 'CAM 1',
        attendee: 'Attendee 1',
        procStatus: 'Proc Status 1',
        action: 'Action 1',
      },
      {
        srNo: 2,
        companyName: 'Company 2',
        cam: 'CAM 2',
        attendee: 'Attendee 2',
        procStatus: 'Proc Status 2',
        action: 'Action 2',
      },
      {
        srNo: 3,
        companyName: 'Company 3',
        cam: 'CAM 3',
        attendee: 'Attendee 3',
        procStatus: 'Proc Status 3',
        action: 'Action 3',
      },
      {
        srNo: 4,
        companyName: 'Company 4',
        cam: 'CAM 4',
        attendee: 'Attendee 4',
        procStatus: 'Proc Status 4',
        action: 'Action 4',
      },
      {
        srNo: 5,
        companyName: 'Company 5',
        cam: 'CAM 5',
        attendee: 'Attendee 5',
        procStatus: 'Proc Status 5',
        action: 'Action 5',
      },
      {
        srNo: 6,
        companyName: 'Company 6',
        cam: 'CAM 6',
        attendee: 'Attendee 6',
        procStatus: 'Proc Status 6',
        action: 'Action 6',
      },
      {
        srNo: 7,
        companyName: 'Company 7',
        cam: 'CAM 7',
        attendee: 'Attendee 7',
        procStatus: 'Proc Status 7',
        action: 'Action 7',
      },
      {
        srNo: 8,
        companyName: 'Company 8',
        cam: 'CAM 8',
        attendee: 'Attendee 8',
        procStatus: 'Proc Status 8',
        action: 'Action 8',
      },
      {
        srNo: 9,
        companyName: 'Company 9',
        cam: 'CAM 9',
        attendee: 'Attendee 9',
        procStatus: 'Proc Status 9',
        action: 'Action 9',
      },
      {
        srNo: 10,
        companyName: 'Company 10',
        cam: 'CAM 10',
        attendee: 'Attendee 10',
        procStatus: 'Proc Status 10',
        action: 'Action 10',
      },
      {
        srNo: 11,
        companyName: 'Company 11',
        cam: 'CAM 11',
        attendee: 'Attendee 11',
        procStatus: 'Proc Status 11',
        action: 'Action 11',
      },
      {
        srNo: 12,
        companyName: 'Company 12',
        cam: 'CAM 12',
        attendee: 'Attendee 12',
        procStatus: 'Proc Status 12',
        action: 'Action 12',
      },
      {
        srNo: 13,
        companyName: 'Company 13',
        cam: 'CAM 13',
        attendee: 'Attendee 13',
        procStatus: 'Proc Status 13',
        action: 'Action 13',
      },
      {
        srNo: 14,
        companyName: 'Company 14',
        cam: 'CAM 14',
        attendee: 'Attendee 14',
        procStatus: 'Proc Status 14',
        action: 'Action 14',
      },
    ];
    // for (let i = 0; i < totalItems; i++) {
    //   tableData.push({
    //     srNo: i + 1,
    //     companyName: `Company ${i + 1}`,
    //     cam: `CAM ${i + 1}`,
    //     attendee: `Attendee ${i + 1}`,
    //     procStatus: `Proc Status ${i + 1}`,
    //     action: `Action ${i + 1}`,
    //   });
    // }
    return tableData;
  };

  const getDisplayItemsIndexes = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    return [startIndex, endIndex];
  };

  // Render the table rows
  const renderTableRows = () => {
    const tableData = generateTableData();
    const [startIndex, endIndex] = getDisplayItemsIndexes();

    return tableData.slice(startIndex, endIndex).map((item, index) => (
      <View
        key={index}
        style={[
          styles.tableRow,
          index % 2 === 0 ? styles.lightBackground : styles.darkBackground,
        ]}>
        <Text style={styles.tableCell}>{item.srNo}</Text>
        <Text style={styles.tableCell}>{item.companyName}</Text>
        <Text style={styles.tableCell}>{item.cam}</Text>
        <Text style={styles.tableCell}>{item.attendee}</Text>
        <Text style={styles.tableCell}>{item.procStatus}</Text>
        <Text style={styles.tableCell}>{item.action}</Text>
      </View>
    ));
  };

  // Go to the next page
  const nextPage = () => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  // Go to the previous page
  const previousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Chem Expo, 2023</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../assets/mainscreen5.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../assets/mainscreen4.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.subText}>RECENT REQUIREMENTS</Text>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Sr No</Text>
          <Text style={styles.tableHeaderText}>Company Name</Text>
          <Text style={styles.tableHeaderText}>CAM</Text>
          <Text style={styles.tableHeaderText}>Attendee</Text>

          <Text style={styles.tableHeaderText}>Proc Status</Text>
          <Text style={styles.tableHeaderText}>Action</Text>
        </View>
        {renderTableRows()}
      </View>

      <View style={styles.paginationContainer}>
        <Text style={styles.paginationText}>
          Page {currentPage}
          {/* of {Math.ceil(totalItems / itemsPerPage)} */}
        </Text>
        <TouchableOpacity
          style={styles.paginationButton}
          onPress={previousPage}
          disabled={currentPage === 1}>
          <Image
            source={require('../assets/previous-icon.png')}
            style={styles.paginationIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paginationButton}
          onPress={nextPage}
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}>
          <Image
            source={require('../assets/next-icon.png')}
            style={styles.paginationIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RequirementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginLeft: 10,
    backgroundColor: 'transparent',
    padding: 10,
  },
  iconImage: {
    width: 30,
    height: 29,
    resizeMode: 'contain',
  },
  buttonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
  },
  mainText: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  subText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 20,
    marginTop: 100,
  },
  tableContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    color: '#000000',
  },
  lightBackground: {
    backgroundColor: '#f9f9f9',
  },
  darkBackground: {
    backgroundColor: '#ebebeb',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
  paginationButton: {
    padding: 10,
    marginHorizontal: 5,
  },
  paginationIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  paginationText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});
