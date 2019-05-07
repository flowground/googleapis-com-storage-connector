/**
 * Auto-generated action file for "Cloud Storage" API.
 *
 * Generated at: 2019-05-07T14:42:02.021Z
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
 * Operation: 'storage.buckets.patch'
 * Endpoint Path: '/b/{bucket}'
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
    "ifMetagenerationMatch",
    "ifMetagenerationNotMatch",
    "predefinedAcl",
    "predefinedDefaultObjectAcl",
    "projection",
    "userProject"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "bucket": "bucket",
    "ifMetagenerationMatch": "ifMetagenerationMatch",
    "ifMetagenerationNotMatch": "ifMetagenerationNotMatch",
    "predefinedAcl": "predefinedAcl",
    "predefinedDefaultObjectAcl": "predefinedDefaultObjectAcl",
    "projection": "projection",
    "userProject": "userProject",
    "acl": "acl",
    "requesterPays": "requesterPays",
    "billing": "billing",
    "cors": "cors",
    "defaultEventBasedHold": "defaultEventBasedHold",
    "defaultObjectAcl": "defaultObjectAcl",
    "defaultKmsKeyName": "defaultKmsKeyName",
    "encryption": "encryption",
    "etag": "etag",
    "enabled": "enabled",
    "lockedTime": "lockedTime",
    "bucketPolicyOnly": "bucketPolicyOnly",
    "iamConfiguration": "iamConfiguration",
    "id": "id",
    "kind": "kind",
    "labels": "labels",
    "rule": "rule",
    "lifecycle": "lifecycle",
    "location": "location",
    "logBucket": "logBucket",
    "logObjectPrefix": "logObjectPrefix",
    "logging": "logging",
    "metageneration": "metageneration",
    "name": "name",
    "entity": "entity",
    "entityId": "entityId",
    "owner": "owner",
    "projectNumber": "projectNumber",
    "effectiveTime": "effectiveTime",
    "isLocked": "isLocked",
    "retentionPeriod": "retentionPeriod",
    "retentionPolicy": "retentionPolicy",
    "selfLink": "selfLink",
    "storageClass": "storageClass",
    "timeCreated": "timeCreated",
    "updated": "updated",
    "versioning": "versioning",
    "mainPageSuffix": "mainPageSuffix",
    "notFoundPage": "notFoundPage",
    "website": "website",
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
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'storage.buckets.patch',
        pathName: '/b/{bucket}',
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