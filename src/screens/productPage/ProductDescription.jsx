import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../constants';
import STAR from 'react-native-vector-icons/AntDesign';
import {TextButton} from '../../../components';
import {width} from '../../../constants/theme';
const ProductDescription = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.prodcut_descroption_container}>
        <View style={styles.product_rows_container}>
          <Text style={{color: COLORS.dark, ...FONTS.h3}}>Product Deatils</Text>
          {/* *************** prodcuts details ************* */}
          <View style={styles.product_desc_rows}>
            {/* ************* row 1 */}
            <View>
              <View style={styles.product_vendor}>
                <Text style={{color: COLORS.grey80, ...FONTS.h5}}>
                  Category
                </Text>
                <Text style={{color: COLORS.dark, ...FONTS.h4}}>Shoes</Text>
              </View>
              <View style={styles.product_vendor}>
                <Text style={{color: COLORS.grey80, ...FONTS.h5}}>
                  Provided by
                </Text>
                <Text style={{color: COLORS.dark, ...FONTS.h4}}>
                  Shoe Store
                </Text>
              </View>
              <View style={styles.product_vendor}>
                <Text style={{color: COLORS.grey80, ...FONTS.h5}}>
                  Warranty From
                </Text>
                <Text style={{color: COLORS.dark, ...FONTS.h4}}>Footwear</Text>
              </View>
              <View style={styles.product_vendor}>
                <Text style={{color: COLORS.grey80, ...FONTS.h5}}>
                  Accessaries
                </Text>
                <Text style={{color: COLORS.dark, ...FONTS.h4}}>
                  Shoes,laces ,soacks
                </Text>
              </View>
            </View>
            {/* ************* row 2 */}

            <View>
              <View style={styles.product_vendor}>
                <Text style={{color: COLORS.grey80, ...FONTS.h5}}>
                  Trademark
                </Text>
                <Text style={{color: COLORS.dark, ...FONTS.h4}}>
                  Air Jordan
                </Text>
              </View>
              <View style={styles.product_vendor}>
                <Text style={{color: COLORS.grey80, ...FONTS.h5}}>Origin</Text>
                <Text style={{color: COLORS.dark, ...FONTS.h4}}>
                  Made in USA
                </Text>
              </View>
              <View style={styles.product_vendor}>
                <Text style={{color: COLORS.grey80, ...FONTS.h5}}>
                  Waterproof
                </Text>
                <Text style={{color: COLORS.dark, ...FONTS.h4}}>Yes</Text>
              </View>
              <View style={styles.product_vendor}>
                <Text style={{color: COLORS.grey80, ...FONTS.h5}}>SKU</Text>
                <Text style={{color: COLORS.dark, ...FONTS.h4}}>#43e5632</Text>
              </View>
            </View>
          </View>
        </View>
        {/* *************** prodcuts description ************* */}
        <View style={styles.product_description}>
          <Text
            style={{
              color: COLORS.dark,
              paddingVertical: 10,
              ...FONTS.h3,
            }}>
            Product Description
          </Text>
          <Text style={{color: COLORS.grey80, ...FONTS.h5}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            maxime suscipit alias fuga cupiditate dicta magnam quo at sint,
            deleniti beatae, impedit excepturi inventore dolore, eveniet fugiat
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            quisquam est alias consequatur. Ullam inventore laboriosam
            accusamus, alias ad laudantium? quis explicabo optio.
          </Text>
        </View>
        {/* *************** product rating box ************* */}
        <View style={styles.prodcut_rating_card}>
          <View style={styles.rating_star}>
            <Text style={{color: COLORS.dark, paddingRight: 10, ...FONTS.h2}}>
              4.7
            </Text>
            <STAR name="star" color={COLORS.success} size={15} />
          </View>
          <View style={styles.rating_buttons}>
            <TextButton
              contentContainerStyle={{
                height: 55,
                width: 140,
                backgroundColor: COLORS.grey20,
                borderRadius: SIZES.radius,
              }}
              labelStyle={{
                color: COLORS.primary,
                ...FONTS.h4,
              }}
              label="Related Products"
              onPress={()=>navigation.navigate("RelatedProducts")}
            />
            <TextButton
              contentContainerStyle={{
                height: 55,
                width: 140,
                backgroundColor: COLORS.grey20,
                borderRadius: SIZES.radius,
              }}
              labelStyle={{
                color: COLORS.primary,
                ...FONTS.h4,
              }}
              label="See Reviews"
              onPress={()=>navigation.navigate("Reviews")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  prodcut_descroption_container: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.grey20,
  },
  product_rows_container: {
    width: width - 20,
    backgroundColor: COLORS.light80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    lineHeight: 20,
    marginVertical: 10,
    borderRadius: 15,
  },
  product_desc_rows: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    lineHeight: 20,
    marginVertical: 5,
    borderRadius:10,
  },
  product_vendor: {
    marginVertical: 5,
  },
  product_description: {
    width: width - 20,
    // alignItems: 'center',
    justifyContent:'center',
    backgroundColor: COLORS.light80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    lineHeight: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  prodcut_rating_card: {
    width: width - 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.light80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    lineHeight: 20,
    marginVertical: 10,
    borderRadius:10,
  },
  rating_star: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rating_buttons: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical:15
  },
});
