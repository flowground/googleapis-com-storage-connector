/**
 * Auto-generated action file for "Cloud Storage" API.
 *
 * Generated at: 2019-05-23T09:13:42.951Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-storage-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'storage.objects.patch'
 * Endpoint Path: '/b/{bucket}/o/{object}'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "bucket",
    "generation",
    "ifGenerationMatch",
    "ifGenerationNotMatch",
    "ifMetagenerationMatch",
    "ifMetagenerationNotMatch",
    "object",
    "predefinedAcl",
    "projection",
    "userProject"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "bucket": "bucket",
    "generation": "generation",
    "ifGenerationMatch": "ifGenerationMatch",
    "ifGenerationNotMatch": "ifGenerationNotMatch",
    "ifMetagenerationMatch": "ifMetagenerationMatch",
    "ifMetagenerationNotMatch": "ifMetagenerationNotMatch",
    "object": "object",
    "predefinedAcl": "predefinedAcl",
    "projection": "projection",
    "userProject": "userProject",
    "acl": "acl",
    "cacheControl": "cacheControl",
    "componentCount": "componentCount",
    "contentDisposition": "contentDisposition",
    "contentEncoding": "contentEncoding",
    "contentLanguage": "contentLanguage",
    "contentType": "contentType",
    "crc32c": "crc32c",
    "encryptionAlgorithm": "encryptionAlgorithm",
    "keySha256": "keySha256",
    "customerEncryption": "customerEncryption",
    "etag": "etag",
    "eventBasedHold": "eventBasedHold",
    "id": "id",
    "kind": "kind",
    "kmsKeyName": "kmsKeyName",
    "md5Hash": "md5Hash",
    "mediaLink": "mediaLink",
    "metadata": "metadata",
    "metageneration": "metageneration",
    "name": "name",
    "entity": "entity",
    "entityId": "entityId",
    "owner": "owner",
    "retentionExpirationTime": "retentionExpirationTime",
    "selfLink": "selfLink",
    "size": "size",
    "storageClass": "storageClass",
    "temporaryHold": "temporaryHold",
    "timeCreated": "timeCreated",
    "timeDeleted": "timeDeleted",
    "timeStorageClassUpdated": "timeStorageClassUpdated",
    "updated": "updated",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['auth_Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'storage.objects.patch',
        pathName: '/b/{bucket}/o/{object}',
        method: 'patch',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}