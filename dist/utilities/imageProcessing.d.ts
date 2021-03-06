/// <reference types="node" />
/**
 * Generate buffered image (image compression and resize is applied accordingly).
 *
 * @param {string} filePath - Absolute path to image file.
 * @param {boolean} [compress] - Flag to compress image.
 * @param {number} [sizeLimit] - Resizing dimension limit value.
 * @param {string} [forceFormat] - Force convert to a particular format.
 * @returns {Promise}
 * @fulfil {Buffer} Buffered image data.
 * @reject {Error} Error value.
 */
export declare function imageToBuffer(filePath: string, compress?: boolean, sizeLimit?: number, forceFormat?: string): Promise<Buffer>;
//# sourceMappingURL=imageProcessing.d.ts.map