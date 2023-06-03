import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import CartImage from '../../../assets/images/collection/shoes/nike.png';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {TextButton} from '../../../components';
import STAR from 'react-native-vector-icons/AntDesign';
import {height, width} from '../../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Cart = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.cartContainer}>
          <View style={styles.modalView}>
            <View style={styles.cart_row1}>
              <Image source={CartImage} style={styles.cart_image} />
              <View>
                <Text style={{color: COLORS.primary, ...FONTS.h4}}>
                  $140.00
                </Text>
                <Text style={{color: COLORS.dark, ...FONTS.h5}}>
                  43 Instock
                </Text>
              </View>
              <STAR name="qrcode" color={COLORS.dark} size={40} />
            </View>
            <View style={styles.colorMain}>
              <Text style={{color: COLORS.dark, ...FONTS.h5}}>Colors</Text>
              <View style={styles.color_container}>
                <Text style={styles.color1}></Text>
                <Text style={styles.color}></Text>
                <Text style={styles.color2}></Text>
              </View>
            </View>
            <View style={styles.colorMain}>
              <Text style={{color: COLORS.dark, ...FONTS.h5}}>Sizes</Text>
              <View style={styles.color_container}>
                <Text style={styles.sizebox}>43 </Text>
                <Text style={styles.sizebox}>42 </Text>
                <Text style={styles.sizebox}>41 </Text>
              </View>
            </View>
            <View style={styles.colorMain}>
              <Text style={{color: COLORS.dark, ...FONTS.h5}}>Quantity</Text>
              <View style={styles.color_container}>
                <TouchableOpacity>
                  <AntDesign
                    name="minus"
                    color="black"
                    size={20}
                    style={styles.plus}
                  />
                </TouchableOpacity>
                <Text style={styles.quantity}>2</Text>
                <TouchableOpacity>
                  <AntDesign
                    name="plus"
                    color="black"
                    size={20}
                    style={styles.plus}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TextButton
              contentContainerStyle={{
                height: 50,
                width: width - 30,
                borderRadius: SIZES.radius,
                marginVertical: 10,
              }}
              labelStyle={{
                color: COLORS.light80,
              }}
              label="Pay Now "
              onpress={()=>navigation.navigate("Checkout")}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.close_button}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.text}> X</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TextButton
        contentContainerStyle={{
          height: 50,
          width: 150,
          borderRadius: SIZES.radius - 5,
          backgroundColor: COLORS.dark,
        }}
        labelStyle={{
          color: COLORS.light,
        }}
        label="Show Cart"
        onPress={() => setModalVisible(true)}

      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  centeredView: {
    // width: width,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 102,
    // backgroundColor:'red'
  },
  modalView: {
    width: width,
    marginTop: height / 2.8,
    paddingTop: 30,
    backgroundColor: COLORS.light,
    // borderRadius: 20,
    paddingHorizontal: 30,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center',
    shadowColor: COLORS.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cartContainer: {
    position: 'relative',
  },
  cart_row1: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cart_image: {
    width: 70,
    height: 50,
    resizeMode: 'cover',
    marginVertical: 10,
  },
  colorMain: {
    alignSelf: 'flex-start',
    marginVertical: 12,
  },
  color_container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  sizebox: {
    backgroundColor: COLORS.secondary60,
    padding: 10,
    color: COLORS.dark,
    borderRadius: 10,
    marginRight: 5,
    fontSize: 14,
    fontWeight: '800',
  },
  color: {
    width: 20,
    height: 20,
    backgroundColor: COLORS.error,
    marginHorizontal: 5,
    borderRadius: 15,
  },
  color1: {
    width: 20,
    height: 20,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
    borderRadius: 15,
  },
  color2: {
    width: 20,
    height: 20,
    backgroundColor: COLORS.dark,
    marginHorizontal: 5,
    borderRadius: 15,
  },
  plus: {
    backgroundColor: COLORS.light80,
    padding: 12,
    borderRadius: SIZES.radius,
    marginRight: 10,
    borderWidth: 1,
    borderColor: COLORS.dark20,
  },
  quantity: {
    backgroundColor: COLORS.grey20,
    padding: 12,
    width: 80,
    textAlign: 'center',
    borderRadius: SIZES.radius,
    marginRight: 10,
    borderWidth: 1,
    borderColor: COLORS.dark20,
  },
  close_button: {
    position: 'absolute',
    top: '37%',
    right: 40,
    backgroundColor: COLORS.dark,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontWeight: '800',
    textAlignVertical: 'center',
    marginLeft: 5,
    marginTop: 3,
    fontSize: 15,
    fontWeight: '800',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
