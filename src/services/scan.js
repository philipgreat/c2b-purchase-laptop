/**
 * 解码美国驾照PDF417条码数据
 * @param {string} barcodeData - 从PDF417条码中读取的原始文本数据
 * @returns {Object} 解码后的结构化驾照信息
 */
function decodeDriversLicensePDF417(barcodeData) {
    // AAMVA标准的字段标识符映射
    const fieldIdentifiers = {
        'DAA': 'firstName_truncated',
        'DAB': 'lastName_truncated',
        'DAC': 'firstName',
        'DAD': 'middleName',
        'DAE': 'nameSuffix',
        'DAF': 'namePrefix',
        'DAG': 'streetAddress',
        'DAH': 'streetAddress2',
        'DAI': 'city',
        'DAJ': 'state',
        'DAK': 'postalCode',
        'DAL': 'country',
        'DAM': 'jurisdictionSpecific1',
        'DAN': 'jurisdictionSpecific2',
        'DAO': 'jurisdictionSpecific3',
        'DAP': 'jurisdictionSpecific4',
        'DAQ': 'documentNumber',
        'DAR': 'jurisdictionSpecific5',
        'DAS': 'jurisdictionSpecific6',
        'DAT': 'jurisdictionSpecific7',
        'DAU': 'height',
        'DAV': 'weight_range',
        'DAW': 'weight_pounds',
        'DAX': 'weight_kilograms',
        'DAY': 'eyeColor',
        'DAZ': 'hairColor',
        'DBA': 'expirationDate',
        'DBB': 'birthDate',
        'DBC': 'sex',
        'DBD': 'issueDate',
        'DBE': 'issuingJurisdiction',
        'DBF': 'documentDiscriminator',
        'DBG': 'auditInformation',
        'DBH': 'inventoryControlNumber',
        'DBI': 'lastName',
        'DBJ': 'firstName',
        'DBK': 'middleName',
        'DBL': 'nameSuffix',
        'DBM': 'namePrefix',
        'DBN': 'mailingAddress',
        'DBO': 'residenceAddress',
        'DBP': 'placeOfBirth',
        'DBQ': 'auditInformation2',
        'DBR': 'race',
        'DBS': 'standardVehicleClassification',
        'DBT': 'standardEndorsementCode',
        'DBU': 'standardRestrictionCode',
        'DCA': 'jurisdictionVehicleClassification',
        'DCB': 'jurisdictionEndorsementCode',
        'DCC': 'jurisdictionRestrictionCode',
        'DCD': 'jurisdictionSpecific8',
        'DCE': 'jurisdictionSpecific9',
        'DCF': 'documentNumber_alt',
        'DCG': 'country',
        'DCH': 'federalCommercialVehicleCodes',
        'DCI': 'placeOfBirth_city',
        'DCJ': 'placeOfBirth_state',
        'DCK': 'placeOfBirth_country',
        'DCL': 'documentDiscriminator_alt',
        'DCM': 'auditInformation_alt',
        'DCN': 'issuingJurisdiction_alt',
        'DCO': 'jurisdictionSpecific10',
        'DCP': 'jurisdictionSpecific11',
        'DCQ': 'jurisdictionSpecific12',
        'DCR': 'jurisdictionSpecific13',
        'DCS': 'lastName_alt',
        'DCT': 'firstName_alt',
        'DCU': 'jurisdictionSpecific14',
        'DCV': 'jurisdictionSpecific15',
        'DCW': 'temporaryAddress',
        'DCX': 'organDonor',
        'DCY': 'jurisdictionSpecific16',
        'DCZ': 'jurisdictionSpecific17',
        'DDA': 'complianceType',
        'DDB': 'cardRevisionDate',
        'DDC': 'hazmatEndorsementExpiry',
        'DDD': 'limitedDurationDocument',
        'DDE': 'familyName_truncated',
        'DDF': 'givenName_truncated',
        'DDG': 'jurisdictionSpecific18',
        'DDH': 'jurisdictionSpecific19',
        'DDI': 'jurisdictionSpecific20',
        'DDJ': 'jurisdictionSpecific21',
        'DDK': 'jurisdictionSpecific22',
        'DDL': 'jurisdictionSpecific23',
        'DDM': 'jurisdictionSpecific24',
        'DDN': 'jurisdictionSpecific25',
        'DDO': 'jurisdictionSpecific26',
        'DDP': 'jurisdictionSpecific27',
        'DDQ': 'jurisdictionSpecific28',
        'DDR': 'jurisdictionSpecific29',
        'DDS': 'jurisdictionSpecific30',
        'DDT': 'jurisdictionSpecific31',
        'DDU': 'jurisdictionSpecific32',
        'DDV': 'jurisdictionSpecific33',
        'DDW': 'jurisdictionSpecific34',
        'DDX': 'jurisdictionSpecific35',
        'DDY': 'jurisdictionSpecific36',
        'DDZ': 'jurisdictionSpecific37'
    };

    // 性别代码映射
    const genderMap = {
        '1': 'Male',
        '2': 'Female',
        '9': 'NotSpecified',
        'M': 'Male',
        'F': 'Female'
    };

    // 眼睛颜色映射
    const eyeColorMap = {
        'BLK': 'Black',
        'BLU': 'Blue',
        'BRO': 'Brown',
        'GRY': 'Gray',
        'GRN': 'Green',
        'HAZ': 'Hazel',
        'MAR': 'Maroon',
        'PNK': 'Pink'
    };

    const result = {
        rawData: barcodeData,
        parsedFields: {},
        standardFormat: {}
    };

    // 简单的解析逻辑 - 按行分割并识别字段标识符
    const lines = barcodeData.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.length < 3) continue;

        // 检查是否是字段标识符（3个大写字母）
        const potentialIdentifier = line.substring(0, 3);
        if (/^[A-Z]{3}$/.test(potentialIdentifier) && fieldIdentifiers[potentialIdentifier]) {
            const fieldValue = line.substring(3).trim();
            const fieldName = fieldIdentifiers[potentialIdentifier];
            
            result.parsedFields[potentialIdentifier] = fieldValue;
            result.standardFormat[fieldName] = fieldValue;

            // 特殊字段处理
            switch (potentialIdentifier) {
                case 'DBC': // 性别
                    result.standardFormat.sexDecoded = genderMap[fieldValue] || fieldValue;
                    break;
                case 'DAY': // 眼睛颜色
                    result.standardFormat.eyeColorDecoded = eyeColorMap[fieldValue] || fieldValue;
                    break;
                case 'DAU': // 身高处理
                    result.standardFormat.heightDecoded = parseHeight(fieldValue);
                    break;
                case 'DBB': // 出生日期
                case 'DBA': // 有效期
                    result.standardFormat[fieldName + 'Decoded'] = parseDate(fieldValue);
                    break;
            }
        }
    }

    return result;
}

/**
 * 解析身高数据
 * @param {string} heightData - 原始身高数据
 * @returns {string} 格式化后的身高
 */
function parseHeight(heightData) {
    if (!heightData) return 'Unknown';
    
    // 处理英寸格式（如 509 表示 5'09"）
    if (/^\d{3}$/.test(heightData)) {
        const feet = Math.floor(parseInt(heightData.substring(0, 1)));
        const inches = parseInt(heightData.substring(1));
        const totalInches = feet * 12 + inches;
        const cm = Math.round(totalInches * 2.54);
        return `${feet}'${inches.toString().padStart(2, '0')}" (${cm}cm)`;
    }
    
    // 处理厘米格式
    if (/^\d{3}cm$/i.test(heightData)) {
        const cm = parseInt(heightData);
        const totalInches = Math.round(cm / 2.54);
        const feet = Math.floor(totalInches / 12);
        const inches = totalInches % 12;
        return `${feet}'${inches}" (${cm}cm)`;
    }
    
    return heightData;
}

/**
 * 解析日期数据
 * @param {string} dateData - 原始日期数据
 * @returns {string} 格式化后的日期
 */
function parseDate(dateData) {
    if (!dateData) return 'Unknown';
    
    // 处理 MMDDYYYY 格式
    if (/^\d{8}$/.test(dateData)) {
        const month = dateData.substring(0, 2);
        const day = dateData.substring(2, 4);
        const year = dateData.substring(4, 8);
        return `${year}-${month}-${day}`;
    }
    
    // 处理 YYYYMMDD 格式
    if (/^\d{8}$/.test(dateData) && parseInt(dateData.substring(0, 4)) > 1900) {
        const year = dateData.substring(0, 4);
        const month = dateData.substring(4, 6);
        const day = dateData.substring(6, 8);
        return `${year}-${month}-${day}`;
    }
    
    return dateData;
}

/**
 * 从解码结果中提取主要信息的便捷函数
 * @param {Object} decodedData - decodeDriversLicensePDF417的返回结果
 * @returns {Object} 简化的主要信息
 */
function extractMainInfo(decodedData) {
    const fields = decodedData.standardFormat;
    
    return {
        firstName: fields.firstName || fields.firstName_alt,
        lastName: fields.lastName || fields.lastName_alt,
        middleName: fields.middleName,
        birthDate: fields.birthDateDecoded || fields.birthDate,
        sex: fields.sexDecoded || fields.sex,
        height: fields.heightDecoded || fields.height,
        eyeColor: fields.eyeColorDecoded || fields.eyeColor,
        address: fields.streetAddress,
        city: fields.city,
        state: fields.state,
        postalCode: fields.postalCode,
        country: fields.country,
        documentNumber: fields.documentNumber || fields.documentNumber_alt,
        expirationDate: fields.expirationDateDecoded || fields.expirationDate,
        issueDate: fields.issueDateDecoded || fields.issueDate
    };
}

// // 使用示例
// const sampleBarcodeData = `ANSI 636028010102DL00410280ZM02660015DL
// DCA
// DCB
// DCD
// DBA05302027
// DCSZHANG
// DACPHILIP
// DAD
// DBD
// DBB05301978
// DBC1
// DAYBRN
// DAU509
// DAG123 MAIN STREET
// DAINEW YORK
// DAJNY
// DAK10001
// DAH
// DCFA12345678901234
// DCGUSA
// DDEN
// DDF
// DDG`;

// try {
//     const decoded = decodeDriversLicensePDF417(sampleBarcodeData);
//     console.log('解码结果:', decoded);
//     console.log('主要信息:', extractMainInfo(decoded));
// } catch (error) {
//     console.error('解码错误:', error);
// }

// // 导出函数供模块使用
// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = {
//         decodeDriversLicensePDF417,
//         extractMainInfo
//     };
// }