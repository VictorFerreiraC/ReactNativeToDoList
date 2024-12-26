// src/styles/typography.ts
import { TextStyle } from 'react-native';

export const Typography = {
  regular: {
    fontFamily: 'Inter-Regular',  // Nome da fonte regular
    fontWeight: 'normal',
    fontStyle: 'normal',
  } as TextStyle,
  bold: {
    fontFamily: 'Inter-Bold',  // Nome da fonte bold
    fontWeight: 'bold',
    fontStyle: 'normal',
  } as TextStyle,
  header: {
    fontFamily: 'Inter-Bold',  // Fonte bold para cabeçalhos
    fontWeight: 'bold',
    fontStyle: 'normal',
  } as TextStyle,
  // Tipografia com tamanhos e line-height específicos
  smallText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    lineHeight: 16.8,  // 140% de 12px
  } as TextStyle,
  mediumText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 19.6,  // 140% de 14px
  } as TextStyle,
  largeText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 22.4,  // 140% de 16px
  } as TextStyle,
  smallTextBold: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    lineHeight: 16.8,  // 140% de 12px
  } as TextStyle,
  mediumTextBold: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    lineHeight: 19.6,  // 140% de 14px
  } as TextStyle,
  largeTextBold: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    lineHeight: 22.4,  // 140% de 16px
  } as TextStyle,
};
