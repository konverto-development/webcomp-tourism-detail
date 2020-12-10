/* tslint:disable */
/* eslint-disable */
/**
 * Open Data Hub Api Tourism
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: V1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface DistrictLocalized
 */
export interface DistrictLocalized {
    /**
     * 
     * @type {boolean}
     * @memberof DistrictLocalized
     */
    isComune?: any;
    /**
     * 
     * @type {string}
     * @memberof DistrictLocalized
     */
    regionId?: any;
    /**
     * 
     * @type {string}
     * @memberof DistrictLocalized
     */
    tourismvereinId?: any;
    /**
     * 
     * @type {string}
     * @memberof DistrictLocalized
     */
    municipalityId?: any;
    /**
     * 
     * @type {string}
     * @memberof DistrictLocalized
     */
    siagId?: any;
    /**
     * 
     * @type {Array&lt;GpsPolygon&gt;}
     * @memberof DistrictLocalized
     */
    gpsPolygon?: any;
    /**
     * 
     * @type {Array&lt;WebcamLocalized&gt;}
     * @memberof DistrictLocalized
     */
    webcam?: any;
    /**
     * 
     * @type {boolean}
     * @memberof DistrictLocalized
     */
    visibleInSearch?: any;
    /**
     * 
     * @type {string}
     * @memberof DistrictLocalized
     */
    id?: any;
    /**
     * 
     * @type {boolean}
     * @memberof DistrictLocalized
     */
    active?: any;
    /**
     * 
     * @type {string}
     * @memberof DistrictLocalized
     */
    customId?: any;
    /**
     * 
     * @type {string}
     * @memberof DistrictLocalized
     */
    shortname?: any;
    /**
     * 
     * @type {string}
     * @memberof DistrictLocalized
     */
    gpstype?: any;
    /**
     * 
     * @type {number}
     * @memberof DistrictLocalized
     */
    latitude?: any;
    /**
     * 
     * @type {number}
     * @memberof DistrictLocalized
     */
    longitude?: any;
    /**
     * 
     * @type {number}
     * @memberof DistrictLocalized
     */
    altitude?: any;
    /**
     * 
     * @type {string}
     * @memberof DistrictLocalized
     */
    altitudeUnitofMeasure?: any;
    /**
     * 
     * @type {Detail}
     * @memberof DistrictLocalized
     */
    detail?: any;
    /**
     * 
     * @type {ContactInfos}
     * @memberof DistrictLocalized
     */
    contactInfos?: any;
    /**
     * 
     * @type {Array&lt;ImageGalleryLocalized&gt;}
     * @memberof DistrictLocalized
     */
    imageGallery?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof DistrictLocalized
     */
    smgTags?: any;
    /**
     * 
     * @type {boolean}
     * @memberof DistrictLocalized
     */
    smgActive?: any;
}
