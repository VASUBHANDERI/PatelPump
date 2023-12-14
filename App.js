import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Button,
  Platform,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import ViewShot from "react-native-view-shot";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { ScaledSheet } from "react-native-size-matters";

Text.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: false,
};
TextInput.defaultProps = {
  ...(TextInput.defaultProps || {}),
  allowFontScaling: false,
};

export default function App() {
  const [name, setName] = useState("");
  const [dd, setDd] = useState("");
  const [mm, setMm] = useState("");
  const [yyyy, setYyyy] = useState("");
  const [suchna, setSuchna] = useState("");

  const [li1, setLi1] = useState("");
  const [li2, setLi2] = useState("");
  const [li3, setLi3] = useState("");
  const [li4, setLi4] = useState("");
  const [li5, setLi5] = useState("");
  const [li6, setLi6] = useState("");
  const [li7, setLi7] = useState("");
  const [li8, setLi8] = useState("");
  const [li9, setLi9] = useState("");
  const [li10, setLi10] = useState("");
  const [li11, setLi11] = useState("");
  const [li12, setLi12] = useState("");
  const [li13, setLi13] = useState("");
  const [li14, setLi14] = useState("");
  const [li15, setLi15] = useState("");
  const [li16, setLi16] = useState("");
  const [li17, setLi17] = useState("");

  const [si, setSi] = useState("");

  const [ri1, setRi1] = useState("");
  const [ri2, setRi2] = useState("");
  const [ri3, setRi3] = useState("");
  const [ri4, setRi4] = useState("");
  const [ri5, setRi5] = useState("");
  const [ri6, setRi6] = useState("");
  const [ri7, setRi7] = useState("");
  const [ri8, setRi8] = useState("");
  const [ri9, setRi9] = useState("");
  const [ri10, setRi10] = useState("");
  const [ri11, setRi11] = useState("");
  const [ri12, setRi12] = useState("");
  const [ri13, setRi13] = useState("");
  const [ri14, setRi14] = useState("");
  const [ri15, setRi15] = useState("");
  const [ri16, setRi16] = useState("");
  const [ri17, setRi17] = useState("");
  const [ri18, setRi18] = useState("");

  const [q1, setQ1] = useState(0);
  const [q2, setQ2] = useState(0);
  const [q3, setQ3] = useState(0);
  const [q4, setQ4] = useState(0);
  const [q5, setQ5] = useState(0);
  const [q6, setQ6] = useState(0);
  const [q7, setQ7] = useState(0);
  const [q8, setQ8] = useState(0);
  const [q9, setQ9] = useState(0);
  const [q10, setQ10] = useState(0);
  const [q11, setQ11] = useState(0);
  const [q12, setQ12] = useState(0);
  const [q13, setQ13] = useState(0);
  const [q14, setQ14] = useState(0);
  const [q15, setQ15] = useState(0);
  const [q16, setQ16] = useState(0);
  const [q17, setQ17] = useState(0);
  const [q18, setQ18] = useState(0);

  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);
  const [p3, setP3] = useState(0);
  const [p4, setP4] = useState(0);
  const [p5, setP5] = useState(0);
  const [p6, setP6] = useState(0);
  const [p7, setP7] = useState(0);
  const [p8, setP8] = useState(0);
  const [p9, setP9] = useState(0);
  const [p10, setP10] = useState(0);
  const [p11, setP11] = useState(0);
  const [p12, setP12] = useState(0);
  const [p13, setP13] = useState(0);
  const [p14, setP14] = useState(0);
  const [p15, setP15] = useState(0);
  const [p16, setP16] = useState(0);
  const [p17, setP17] = useState(0);
  const [p18, setP18] = useState(0);

  const [t1, setT1] = useState(0);
  const [t2, setT2] = useState(0);
  const [t3, setT3] = useState(0);
  const [t4, setT4] = useState(0);
  const [t5, setT5] = useState(0);
  const [t6, setT6] = useState(0);
  const [t7, setT7] = useState(0);
  const [t8, setT8] = useState(0);
  const [t9, setT9] = useState(0);
  const [t10, setT10] = useState(0);
  const [t11, setT11] = useState(0);
  const [t12, setT12] = useState(0);
  const [t13, setT13] = useState(0);
  const [t14, setT14] = useState(0);
  const [t15, setT15] = useState(0);
  const [t16, setT16] = useState(0);
  const [t17, setT17] = useState(0);
  const [t18, setT18] = useState(0);

  const ct1 = p1 * q1;
  const ct2 = p2 * q2;
  const ct3 = p3 * q3;
  const ct4 = p4 * q4;
  const ct5 = p5 * q5;
  const ct6 = p6 * q6;
  const ct7 = p7 * q7;
  const ct8 = p8 * q8;
  const ct9 = p9 * q9;
  const ct10 = p10 * q10;
  const ct11 = p11 * q11;
  const ct12 = p12 * q12;
  const ct13 = p13 * q13;
  const ct14 = p14 * q14;
  const ct15 = p15 * q15;
  const ct16 = p16 * q16;
  const ct17 = p17 * q17;
  const ct18 = p18 * q18;

  const ft1 = ct1 > 0 ? ct1 : t1;
  const ft2 = ct2 > 0 ? ct2 : t2;
  const ft3 = ct3 > 0 ? ct3 : t3;
  const ft4 = ct4 > 0 ? ct4 : t4;
  const ft5 = ct5 > 0 ? ct5 : t5;
  const ft6 = ct6 > 0 ? ct6 : t6;
  const ft7 = ct7 > 0 ? ct7 : t7;
  const ft8 = ct8 > 0 ? ct8 : t8;
  const ft9 = ct9 > 0 ? ct9 : t9;
  const ft10 = ct10 > 0 ? ct10 : t10;
  const ft11 = ct11 > 0 ? ct11 : t11;
  const ft12 = ct12 > 0 ? ct12 : t12;
  const ft13 = ct13 > 0 ? ct13 : t13;
  const ft14 = ct14 > 0 ? ct14 : t14;
  const ft15 = ct15 > 0 ? ct15 : t15;
  const ft16 = ct16 > 0 ? ct16 : t16;
  const ft17 = ct17 > 0 ? ct17 : t17;
  const ft18 = ct18 > 0 ? ct18 : t18;

  const total =
    parseInt(ft1) +
    parseInt(ft2) +
    parseInt(ft3) +
    parseInt(ft4) +
    parseInt(ft5) +
    parseInt(ft6) +
    parseInt(ft7) +
    parseInt(ft8) +
    parseInt(ft9) +
    parseInt(ft10) +
    parseInt(ft11) +
    parseInt(ft12) +
    parseInt(ft13) +
    parseInt(ft14) +
    parseInt(ft15) +
    parseInt(ft16) +
    parseInt(ft17) +
    parseInt(ft18);

  const reset = () => {
    setName("");
    setSuchna("");
    setSi("");

    setRi1("");
    setRi2("");
    setRi3("");
    setRi4("");
    setRi5("");
    setRi6("");
    setRi7("");
    setRi8("");
    setRi9("");
    setRi10("");
    setRi11("");
    setRi12("");
    setRi13("");
    setRi14("");
    setRi15("");
    setRi16("");
    setRi17("");
    setRi18("");

    setP1(0);
    setP2(0);
    setP3(0);
    setP4(0);
    setP5(0);
    setP6(0);
    setP7(0);
    setP8(0);
    setP9(0);
    setP10(0);
    setP11(0);
    setP12(0);
    setP13(0);
    setP14(0);
    setP15(0);
    setP16(0);
    setP17(0);
    setP18(0);

    setQ1(0);
    setQ2(0);
    setQ3(0);
    setQ4(0);
    setQ5(0);
    setQ6(0);
    setQ7(0);
    setQ8(0);
    setQ9(0);
    setQ10(0);
    setQ11(0);
    setQ12(0);
    setQ13(0);
    setQ14(0);
    setQ15(0);
    setQ16(0);
    setQ17(0);
    setQ18(0);

    setT1(0);
    setT2(0);
    setT3(0);
    setT4(0);
    setT5(0);
    setT6(0);
    setT7(0);
    setT8(0);
    setT9(0);
    setT10(0);
    setT11(0);
    setT12(0);
    setT13(0);
    setT14(0);
    setT15(0);
    setT16(0);
    setT17(0);
    setT18(0);
  };

  const viewShotRef = useRef(null);

  const captureView = async () => {
    if (viewShotRef.current) {
      try {
        const uri = await viewShotRef.current.capture();
        // Share the captured image
        await shareImage(uri);
      } catch (error) {
        console.error("Capture failed:", error);
      }
    }
  };

  const shareImage = async (uri) => {
    if (!(await Sharing.isAvailableAsync())) {
      alert("Sharing is not available on your device");
      return;
    }

    await Sharing.shareAsync(uri);
  };

  const [loaded] = useFonts({
    // make sure path is correct
    ExtraBoldGujarati: require("./assets/fonts/NotoSerifGujarati-ExtraBold.ttf"),
    RegularGujarati: require("./assets/fonts/NotoSerifGujarati-Regular.ttf"),
    BlackGujarati: require("./assets/fonts/NotoSerifGujarati-Black.ttf"),
    BoldGujarati: require("./assets/fonts/NotoSerifGujarati-Bold.ttf"),
    MediumGujarati: require("./assets/fonts/NotoSerifGujarati-Medium.ttf"),
    LightGujarati: require("./assets/fonts/NotoSerifGujarati-Light.ttf"),
  });

  const { height, width } = Dimensions.get("screen");
  const currentDate = new Date();

  // Extract the year, month, and day from the Date object
  const year = currentDate.getFullYear();
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Adding 1 because January is 0
  const day = ("0" + currentDate.getDate()).slice(-2);

  if (!loaded) {
    return;
  }
  return (
    <View style={{ flex: 1, height: height }}>
      <ScrollView>
        <View
          style={{
            height: height * 0.95,
            paddingTop: Constants.statusBarHeight * 0.5,
          }}
        >
          <ViewShot
            style={{ flex: 1, backgroundColor: "#FFFFFF" }}
            ref={viewShotRef}
          >
            <View style={styles.formContainer}>
              <View style={styles.mainView1}>
                <View style={styles.subView1_1}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.fontMedium}>બુધાભાઈ પાલડીયા</Text>
                    <Text style={styles.fontLight}>(ખાખરીયા)</Text>
                    <Text style={styles.fontRegular}>9427262853</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.fontMedium}>|| શ્રી ગણેશાય નમઃ ||</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.fontMedium}>રિકિન ભંડેરી</Text>
                    <Text style={styles.fontLight}>(પાલીતાણા)</Text>
                    <Text style={styles.fontRegular}>8141893368</Text>
                  </View>
                </View>
                <View style={styles.subView1_2}>
                  <View style={{ alignItems: "center", flex: 1 }}>
                    <Text style={styles.fontExtraBold}>પટેલ પંપ એજન્સી</Text>
                  </View>
                </View>
                <View style={styles.subView1_3}>
                  <Text style={styles.fontAddress}>
                    232, ખોડીયારનગર સોસા., ABC સર્કલ, સુદામા ચોક, મોટા વરાછા,
                    સુરત - 394101
                  </Text>
                </View>
              </View>
              <View style={styles.mainView2}>
                <View style={styles.subView2_1}>
                  <Text style={styles.whiteTitle}>બોરીંગ-એસ્ટીમેન્ટ</Text>
                </View>
                <View style={styles.subView2_2}>
                  <View style={styles.subSubView2_2_1}>
                    <Text style={styles.shree}>શ્રી.</Text>
                    <TextInput
                      style={styles.name}
                      value={name}
                      onChangeText={(value) => {
                        setName(value);
                      }}
                    />
                  </View>
                  <View style={styles.subSubView2_2_2}>
                    <Text style={styles.shree}>
                      તા.{day} / {month} / {year}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.mainView3}>
                <ImageBackground
                  source={require("./assets/luxa.org-opacity-changed-submersible-pump-removebg-preview.png")}
                  style={styles.background}
                  resizeMode="center"
                >
                  <View style={styles.headingContainer}>
                    <View style={styles.heading1}>
                      <Text style={styles.headingText}>વિગત</Text>
                    </View>
                    <View style={styles.heading2}>
                      <Text style={styles.headingText}>નંગ</Text>
                    </View>
                    <View style={styles.heading2}>
                      <Text style={styles.headingText}>ભાવ</Text>
                    </View>
                    <View style={styles.heading3}>
                      <Text style={styles.headingText}>રૂપિયા</Text>
                    </View>
                  </View>
                  <View style={styles.detailContainer}>
                    <View style={styles.detailFlex1}>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>બોરીંગ ફુટ</Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri1}
                              onChangeText={(value) => {
                                setRi1(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>
                              P.V.C. કેસીંગ પાઈપ ફુટ
                            </Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri2}
                              onChangeText={(value) => {
                                setRi2(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>સ્ટેનર પાઈપ</Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri3}
                              onChangeText={(value) => {
                                setRi3(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>
                              સોલ્યુશન અને સ્ક્રુ
                            </Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri4}
                              onChangeText={(value) => {
                                setRi4(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText1}>
                              ગ્રાવલ (સ્ટેનરવાળા પાઈપ સુધી)
                            </Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri5}
                              onChangeText={(value) => {
                                setRi5(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>સબમર્સીબલ પંપ</Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri6}
                              onChangeText={(value) => {
                                setRi6(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox3}>
                          <TextInput
                            value={si}
                            onChangeText={(value) => {
                              setSi(value);
                            }}
                            style={styles.info}
                          />
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>સ્ટાર્ટર</Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri7}
                              onChangeText={(value) => {
                                setRi7(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>કેબલ મીટર</Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri8}
                              onChangeText={(value) => {
                                setRi8(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>
                              HDPE પાઈપ ISI મીટર
                            </Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri9}
                              onChangeText={(value) => {
                                setRi9(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>સ્ટેપ નિપલ</Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri10}
                              onChangeText={(value) => {
                                setRi10(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>બોરકેપ</Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri11}
                              onChangeText={(value) => {
                                setRi11(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>પાટા ક્લેમ્પ</Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri12}
                              onChangeText={(value) => {
                                setRi12(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>
                              ગ.નિપલ તથા પરચુરણ
                            </Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri13}
                              onChangeText={(value) => {
                                setRi13(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>
                              ગ.બેન્ડ + કપ્લીન
                            </Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri14}
                              onChangeText={(value) => {
                                setRi14(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>
                              નોન રીટર્ન વાલ્વ
                            </Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri15}
                              onChangeText={(value) => {
                                setRi15(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>
                              પંપ ઉતારવાની મજુરી
                            </Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri16}
                              onChangeText={(value) => {
                                setRi16(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>
                              ભાડુ (પાઈપ + મોટર)
                            </Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri17}
                              onChangeText={(value) => {
                                setRi17(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailBoxContainer}>
                        <View style={styles.detailBox}>
                          <View style={styles.detailBox2}>
                            <Text style={styles.detailText}>
                              ખાડો ખોદવાની મજૂરી
                            </Text>
                          </View>
                          <View style={styles.detailBox3}>
                            <TextInput
                              value={ri18}
                              onChangeText={(value) => {
                                setRi18(value);
                              }}
                              style={styles.info}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.detailFlex2}>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q1 <= 0 ? "" : q1}
                          onChangeText={(value) => {
                            setQ1(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q2 <= 0 ? "" : q2}
                          onChangeText={(value) => {
                            setQ2(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q3 <= 0 ? "" : q3}
                          onChangeText={(value) => {
                            setQ3(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q4 <= 0 ? "" : q4}
                          onChangeText={(value) => {
                            setQ4(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q5 <= 0 ? "" : q5}
                          onChangeText={(value) => {
                            setQ5(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q6 <= 0 ? "" : q6}
                          onChangeText={(value) => {
                            setQ6(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}></View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q7 <= 0 ? "" : q7}
                          onChangeText={(value) => {
                            setQ7(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q8 <= 0 ? "" : q8}
                          onChangeText={(value) => {
                            setQ8(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q9 <= 0 ? "" : q9}
                          onChangeText={(value) => {
                            setQ9(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q10 <= 0 ? "" : q10}
                          onChangeText={(value) => {
                            setQ10(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q11 <= 0 ? "" : q11}
                          onChangeText={(value) => {
                            setQ11(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q12 <= 0 ? "" : q12}
                          onChangeText={(value) => {
                            setQ12(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q13 <= 0 ? "" : q13}
                          onChangeText={(value) => {
                            setQ13(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q14 <= 0 ? "" : q14}
                          onChangeText={(value) => {
                            setQ14(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q15 <= 0 ? "" : q15}
                          onChangeText={(value) => {
                            setQ15(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q16 <= 0 ? "" : q16}
                          onChangeText={(value) => {
                            setQ16(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q17 <= 0 ? "" : q17}
                          onChangeText={(value) => {
                            setQ17(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={q18 <= 0 ? "" : q18}
                          onChangeText={(value) => {
                            setQ18(value);
                            setT18(q18 * p18);
                          }}
                          style={styles.qty}
                        />
                      </View>
                    </View>
                    <View style={styles.detailFlex2}>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p1 <= 0 ? "" : p1}
                          onChangeText={(value) => {
                            setP1(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p2 <= 0 ? "" : p2}
                          onChangeText={(value) => {
                            setP2(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p3 <= 0 ? "" : p3}
                          onChangeText={(value) => {
                            setP3(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p4 <= 0 ? "" : p4}
                          onChangeText={(value) => {
                            setP4(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p5 <= 0 ? "" : p5}
                          onChangeText={(value) => {
                            setP5(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p6 <= 0 ? "" : p6}
                          onChangeText={(value) => {
                            setP6(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}></View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p7 <= 0 ? "" : p7}
                          onChangeText={(value) => {
                            setP7(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p8 <= 0 ? "" : p8}
                          onChangeText={(value) => {
                            setP8(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p9 <= 0 ? "" : p9}
                          onChangeText={(value) => {
                            setP9(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p10 <= 0 ? "" : p10}
                          onChangeText={(value) => {
                            setP10(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p11 <= 0 ? "" : p11}
                          onChangeText={(value) => {
                            setP11(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p12 <= 0 ? "" : p12}
                          onChangeText={(value) => {
                            setP12(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p13 <= 0 ? "" : p13}
                          onChangeText={(value) => {
                            setP13(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p14 <= 0 ? "" : p14}
                          onChangeText={(value) => {
                            setP14(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p15 <= 0 ? "" : p15}
                          onChangeText={(value) => {
                            setP15(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p16 <= 0 ? "" : p16}
                          onChangeText={(value) => {
                            setP16(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p17 <= 0 ? "" : p17}
                          onChangeText={(value) => {
                            setP17(value);
                          }}
                          style={styles.qty}
                        />
                      </View>
                      <View style={styles.cell}>
                        <TextInput
                          keyboardType="number-pad"
                          value={p18 <= 0 ? "" : p18}
                          onChangeText={(value) => {
                            setP18(value);
                            setT18(q18 * p18);
                          }}
                          style={styles.qty}
                        />
                      </View>
                    </View>
                    <View style={styles.detailFlex3}>
                      <View style={styles.cell}>
                        {ct1 > 0 ? (
                          <Text style={styles.ft}>{ct1}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t1 > 0 ? t1 : " "}
                            onChangeText={(value) => {
                              setT1(value);
                            }}
                            onEndEditing={() => {
                              setP1(0);
                              setQ1(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>

                      <View style={styles.cell}>
                        {ct2 > 0 ? (
                          <Text style={styles.ft}>{ct2}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t2 > 0 ? t2 : " "}
                            onChangeText={(value) => {
                              setT2(value);
                            }}
                            onEndEditing={() => {
                              setP2(0);
                              setQ2(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>

                      <View style={styles.cell}>
                        {ct3 > 0 ? (
                          <Text style={styles.ft}>{ct3}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t3 > 0 ? t3 : " "}
                            onChangeText={(value) => {
                              setT3(value);
                            }}
                            onEndEditing={() => {
                              setP3(0);
                              setQ3(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>

                      <View style={styles.cell}>
                        {ct4 > 0 ? (
                          <Text style={styles.ft}>{ct4}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t4 > 0 ? t4 : " "}
                            onChangeText={(value) => {
                              setT4(value);
                            }}
                            onEndEditing={() => {
                              setP4(0);
                              setQ4(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>

                      <View style={styles.cell}>
                        {ct5 > 0 ? (
                          <Text style={styles.ft}>{ct5}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t5 > 0 ? t5 : " "}
                            onChangeText={(value) => {
                              setT5(value);
                            }}
                            onEndEditing={() => {
                              setP5(0);
                              setQ5(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>

                      <View style={styles.cell}>
                        {ct6 > 0 ? (
                          <Text style={styles.ft}>{ct6}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t6 > 0 ? t6 : " "}
                            onChangeText={(value) => {
                              setT6(value);
                            }}
                            onEndEditing={() => {
                              setP6(0);
                              setQ6(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>
                      <View style={styles.cell}></View>
                      <View style={styles.cell}>
                        {ct7 > 0 ? (
                          <Text style={styles.ft}>{ct7}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t7 > 0 ? t7 : " "}
                            onChangeText={(value) => {
                              setT7(value);
                            }}
                            onEndEditing={() => {
                              setP7(0);
                              setQ7(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>

                      <View style={styles.cell}>
                        {ct8 > 0 ? (
                          <Text style={styles.ft}>{ct8}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t8 > 0 ? t8 : " "}
                            onChangeText={(value) => {
                              setT8(value);
                            }}
                            onEndEditing={() => {
                              setP8(0);
                              setQ8(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>

                      <View style={styles.cell}>
                        {ct9 > 0 ? (
                          <Text style={styles.ft}>{ct9}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t9 > 0 ? t9 : " "}
                            onChangeText={(value) => {
                              setT9(value);
                            }}
                            onEndEditing={() => {
                              setP9(0);
                              setQ9(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>

                      <View style={styles.cell}>
                        {ct10 > 0 ? (
                          <Text style={styles.ft}>{ct10}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t10 > 0 ? t10 : " "}
                            onChangeText={(value) => {
                              setT10(value);
                            }}
                            onEndEditing={() => {
                              setP10(0);
                              setQ10(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>

                      <View style={styles.cell}>
                        {ct11 > 0 ? (
                          <Text style={styles.ft}>{ct11}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t11 > 0 ? t11 : " "}
                            onChangeText={(value) => {
                              setT11(value);
                            }}
                            onEndEditing={() => {
                              setP11(0);
                              setQ11(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>

                      <View style={styles.cell}>
                        {ct12 > 0 ? (
                          <Text style={styles.ft}>{ct12}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t12 > 0 ? t12 : " "}
                            onChangeText={(value) => {
                              setT12(value);
                            }}
                            onEndEditing={() => {
                              setP12(0);
                              setQ12(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>
                      <View style={styles.cell}>
                        {ct13 > 0 ? (
                          <Text style={styles.ft}>{ct13}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t13 > 0 ? t13 : " "}
                            onChangeText={(value) => {
                              setT13(value);
                            }}
                            onEndEditing={() => {
                              setP13(0);
                              setQ13(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>

                      <View style={styles.cell}>
                        {ct14 > 0 ? (
                          <Text style={styles.ft}>{ct14}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t14 > 0 ? t14 : " "}
                            onChangeText={(value) => {
                              setT14(value);
                            }}
                            onEndEditing={() => {
                              setP14(0);
                              setQ14(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>

                      <View style={styles.cell}>
                        {ct15 > 0 ? (
                          <Text style={styles.ft}>{ct15}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t15 > 0 ? t15 : " "}
                            onChangeText={(value) => {
                              setT15(value);
                            }}
                            onEndEditing={() => {
                              setP15(0);
                              setQ15(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>

                      <View style={styles.cell}>
                        {ct16 > 0 ? (
                          <Text style={styles.ft}>{ct16}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t16 > 0 ? t16 : " "}
                            onChangeText={(value) => {
                              setT16(value);
                            }}
                            onEndEditing={() => {
                              setP16(0);
                              setQ16(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>

                      <View style={styles.cell}>
                        {ct17 > 0 ? (
                          <Text style={styles.ft}>{ct17}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t17 > 0 ? t17 : " "}
                            onChangeText={(value) => {
                              setT17(value);
                            }}
                            onEndEditing={() => {
                              setP17(0);
                              setQ17(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>
                      <View style={styles.cell}>
                        {ct18 > 0 ? (
                          <Text style={styles.ft}>{ct18}</Text>
                        ) : (
                          <TextInput
                            keyboardType="number-pad"
                            value={t18 > 0 ? t18 : " "}
                            onChangeText={(value) => {
                              setT18(value);
                            }}
                            onEndEditing={() => {
                              setP18(0);
                              setQ18(0);
                            }}
                            style={styles.ft}
                          />
                        )}
                      </View>
                    </View>
                  </View>
                  <View style={styles.totalContainer}>
                    <View style={styles.cell1}></View>
                    <View style={styles.cell2}>
                      <Text style={styles.headingText}>ટોટલ</Text>
                    </View>
                    <View style={styles.cell3}>
                      <Text style={styles.t}>{total <= 0 ? "" : total}</Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.mainView4}>
                <View style={styles.subSubView2_2_1}>
                  <Text style={styles.Note1}>સુચના:</Text>
                  <TextInput
                    style={styles.suchna}
                    value={suchna}
                    onChangeText={(value) => {
                      setSuchna(value);
                    }}
                  />
                </View>

                <View>
                  <Text style={styles.Note}>
                    1) ગેરેંટી પિરિયડ દરમ્યાન પંપ ખોલ-ફીટીંગ ચાર્જ ગ્રાહકને
                    ચુકવવાનો રહેશે.
                  </Text>
                  <Text style={styles.Note}>
                    2) બોરીંગ થતી વખતે માટીની જરૂર પડે તો ખર્ચ અલગથી લાગશે.
                  </Text>
                  <Text style={styles.Note}>
                    3) ગ્રાવલ વધારે જોઈએ તો પૈસા અલગથી થશે.
                  </Text>
                  <Text style={styles.Note}>
                    4) ખાડો બુરાવાનો ગ્રાહકે રહેશે.
                  </Text>
                </View>
              </View>
            </View>
          </ViewShot>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginVertical: Constants.statusBarHeight * 0.4,
            }}
          >
            <View style={styles.copyRights}>
              <Text style={styles.copyRights}>
                Copyright @ 2023 Patel Pump Agency
              </Text>
              <Text style={styles.copyRights}>All rights reserved</Text>
            </View>
            <TouchableOpacity
              onPress={reset}
              style={{ marginRight: Constants.statusBarHeight }}
            >
              <Ionicons name="reload-circle-sharp" size={32} color="#191970" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={captureView}
              style={{ marginRight: Constants.statusBarHeight }}
            >
              <FontAwesome name="send" size={28} color="#191970" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = ScaledSheet.create({
  formContainer: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    marginVertical: Constants.statusBarHeight * 0.5,
    marginHorizontal: Constants.statusBarHeight * 0.2,
    borderColor: "#191970",
    borderWidth: 3,
    borderRadius: 15,
  },
  background: {
    flex: 1,
  },
  mainView1: {
    flex: 2,
    borderColor: "#191970",
    borderWidth: 1,
    margin: 2,
    borderRadius: 10,
  },
  mainView2: {
    flex: 1,
    borderColor: "#191970",
    borderWidth: 1,
    margin: 1,
    borderRadius: 10,
    paddingBottom: 3,
  },
  mainView3: {
    flex: 9,
    borderColor: "#191970",
    borderWidth: 1,
    margin: 1,
    borderRadius: 10,
    paddingBottom: 3,
  },
  mainView4: {
    flex: 1,
    borderColor: "#191970",
    borderWidth: 1,
    margin: 1,
    borderRadius: 10,
    paddingBottom: 3,
  },
  subView1_1: {
    flex: 2,
    flexDirection: "row",
  },
  subView1_2: {
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 5,
  },
  subView1_3: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "#191970",
  },
  fontMedium: {
    fontSize: 12,
    fontFamily: "MediumGujarati",
    color: "#191970",
  },
  fontRegular: {
    fontSize: 12,
    fontFamily: "RegularGujarati",
    color: "#191970",
  },
  fontExtraBold: {
    fontSize: 32,
    fontFamily: "ExtraBoldGujarati",
    color: "#191970",
    marginTop: 2,
  },
  fontTitle: {
    fontSize: 20,
    fontFamily: "BoldGujarati",
    color: "#191970",
  },
  fontBlack: {
    fontSize: 20,
    fontFamily: "BlackGujarati",
    color: "#191970",
  },
  fontLight: {
    fontSize: 10,
    fontFamily: "LightGujarati",
    color: "#191970",
    marginVertical: -5,
  },
  fontAddress: {
    fontSize: 12, //12
    fontFamily: "LightGujarati",
    color: "#ffff",
    // marginVertical: -5,
  },
  subView2_1: {
    alignSelf: "center",
    backgroundColor: "#191970",
    justifyContent: "center",
    padding: 2,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  whiteTitle: {
    fontSize: 14,
    fontFamily: "BoldGujarati",
    color: "#fff",
    marginHorizontal: 5,
    marginBottom: -2,
  },
  subView2_2: {
    flexDirection: "row",
    flex: 1,
    marginTop: 2,
  },
  subSubView2_2_1: {
    flexDirection: "row",
    flex: 5,

    alignItems: "center",
    paddingTop: 3,
  },
  subSubView2_2_2: {
    flexDirection: "row",
    flex: 2,
    alignItems: "center",
    paddingTop: 3,
  },
  shree: {
    fontSize: 13,
    fontFamily: "MediumGujarati",
    color: "#191970",
    // marginBottom: 4,
  },
  name: {
    borderBottomColor: "#191970",
    borderBottomWidth: 2,
    flex: 1,
    color: "#191970",
    fontFamily: "MediumGujarati",
    fontSize: 13,
    marginRight: 3,
    marginLeft: 3,
    textAlignVertical: "bottom",
    marginBottom: 1,
    alignContent: "flex-end",
    paddingVertical: 0,
  },
  suchna: {
    borderBottomColor: "#191970",
    // borderBottomWidth: 2,
    flex: 1,
    color: "#191970",
    fontFamily: "MediumGujarati",
    fontSize: 8,
    marginRight: 3,
    marginLeft: 3,
    textAlignVertical: "bottom",
    marginBottom: 2,
    alignContent: "flex-end",
    paddingVertical: 0,
  },
  number: {
    borderBottomColor: "#191970",
    // borderBottomWidth: 2,
    flex: 1,
    color: "#191970",
    fontFamily: "MediumGujarati",
    fontSize: 11,
    marginRight: 3,
    marginLeft: 3,
    textAlignVertical: "bottom",
    marginBottom: 2,
    alignContent: "flex-end",
    paddingVertical: 0,
    alignSelf: "center",
  },
  headingContainer: {
    flexDirection: "row",
    flex: 1,
  },
  detailContainer: {
    flexDirection: "row",
    flex: 18,
  },
  totalContainer: {
    flexDirection: "row",
    flex: 1,
  },
  heading1: {
    flex: 11,
    borderColor: "#191970",
    borderWidth: 1,
    backgroundColor: "#191970",
    borderRadius: 5,
    justifyContent: "center",
  },
  heading2: {
    flex: 2,
    borderColor: "#191970",
    borderWidth: 1,
    backgroundColor: "#191970",
    borderRadius: 5,
    justifyContent: "center",
  },
  heading3: {
    flex: 3,
    borderColor: "#191970",
    borderWidth: 1,
    backgroundColor: "#191970",
    borderRadius: 5,
    justifyContent: "center",
  },
  detailFlex1: {
    flex: 11,
  },
  detailFlex2: {
    flex: 2,
  },
  detailFlex3: {
    flex: 3,
  },

  detailBoxContainer: {
    flexDirection: "row",
    flex: 1,
    borderColor: "#191970",
    borderWidth: 1,
    borderRadius: 5,
  },
  detailBox1: {
    flex: 2,
    justifyContent: "center",
  },
  detailBox2: {
    justifyContent: "center",
    marginRight: 1,
  },
  detailBox3: {
    flex: 1,
    justifyContent: "center",
  },
  detailBox: {
    flexDirection: "row",
    flex: 7,
    paddingLeft: 3,
    // justifyContent:'center'
  },

  cell: {
    flex: 1,
    borderColor: "#191970",
    borderWidth: 1,
    borderRadius: 5,
  },

  cell2: {
    flex: 2,
    borderColor: "#191970",
    borderWidth: 1,
    borderRadius: 5,
    // marginLeft:1
    backgroundColor: "#191970",
  },
  cell3: {
    flex: 5,
    borderColor: "#191970",
    borderWidth: 1,
    borderRadius: 5,
  },
  headingText: {
    fontSize: 15,
    fontFamily: "RegularGujarati",
    color: "#ffff",
    alignSelf: "center",
  },
  detailText: {
    fontSize: 13,
    fontFamily: "RegularGujarati",
    color: "#191970",
    // alignSelf: "center",
  },
  detailText1: {
    fontSize: 12,
    fontFamily: "RegularGujarati",
    color: "#191970",
    // alignSelf: "center",
  },
  cell1: {
    flexDirection: "row",
    flex: 11,
    borderColor: "#191970",
    borderWidth: 1,
    borderRadius: 5,
  },
  Note: {
    fontSize: 8,
    fontFamily: "MediumGujarati",
    color: "#191970",
    marginLeft: 2,
    marginBottom: -4,
  },
  Note1: {
    fontSize: 8,
    fontFamily: "MediumGujarati",
    color: "#191970",
    marginLeft: 2,
  },
  info: {
    // paddingTop:1,
    fontSize: 13,
    fontFamily: "BoldGujarati",
    color: "#000",
    marginLeft: 1,
    // marginTop:4,
    // borderColor:'red',
    // borderWidth:1,
    marginBottom: -3,
  },
  qty: {
    flex: 1,
    color: "#191970",
    fontFamily: "MediumGujarati",
    fontSize: 12,
    textAlignVertical: "center",
    alignContent: "flex-end",
    alignSelf: "center",
    textAlign: "center",
  },
  ft: {
    flex: 1,
    color: "#191970",
    fontFamily: "MediumGujarati",
    fontSize: 12,
    textAlignVertical: "center",
    alignContent: "flex-end",
    // alignSelf: "center",
    textAlign: "right",
    marginRight: 3,
  },
  t: {
    color: "#191970",
    fontFamily: "MediumGujarati",
    fontSize: 16,
    alignSelf: "flex-end",
    marginRight: 2,
  },
  date: {
    borderBottomColor: "#191970",
    borderBottomWidth: 2,
    flex: 1,
    color: "#191970",
    fontFamily: "MediumGujarati",
    fontSize: 12,
    textAlignVertical: "center",
    alignContent: "flex-end",
    alignSelf: "center",
    textAlign: "center",
  },
  copyRights: {
    color: "#19197080",
    fontSize: 10,
    alignSelf: "flex-start",
    flex: 1,
    fontFamily: "LightGujarati",
    marginLeft: Constants.statusBarHeight * 0.5,
    marginBottom: -1,
  },
});
