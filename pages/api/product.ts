// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Product, ErrorResponse } from "types/Product";

const sleep = () => new Promise((r) => setTimeout(r, 1500));

/**
 * Fake APi endpoint
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | ErrorResponse>
) {
  await sleep();

  if (Math.random() > 0.5) {
    res
      .status(404)
      .json({ errorMessage: "Product not found, please try again..." });
    return;
  }

  res.status(200).json({
    breadcrumb: {
      breadcrumb_url: "/furniture/bedrooms",
      breadcrumb_label: "Bedrooms",
    },
    breadCrumbs: [
      {
        level: 0,
        url: "/furniture/bedrooms",
        label: "Bedrooms",
        category: "bedroom",
      },
      {
        level: 1,
        url: "/furniture/bedrooms/beds",
        label: "Beds",
        category: "beds",
      },
      {
        level: 2,
        url: "/furniture/bedrooms/beds/size/king",
        label: "king beds",
        category: "king beds",
      },
    ],
    category: "bedroom",
    sub_category: ["Beds", "King Beds"],
    catalog_availability: {
      FL: false,
      SE: true,
      TX: false,
      OOM: false,
    },
    variations: {
      size: [
        {
          sku: "3245304P",
          variation_value: "King",
          title: "Palm Grove Toffee 3 Pc King Panel Bed",
          catalog_availability: {
            FL: false,
            SE: true,
            TX: false,
            OOM: false,
          },
          image:
            "https://assets.rtg-dev.com/product/palm-grove-toffee-3-pc-king-panel-bed_3245304P_swatch-image-item?cache-id=34dc5d2650e6acd19189785ab4a2bdb6",
          route: "/palm-grove-toffee-3-pc-king-panel-bed/3245304P",
        },
        {
          sku: "3235304P",
          variation_value: "Queen",
          title: "Palm Grove Toffee 3 Pc Queen Panel Bed",
          catalog_availability: {
            FL: false,
            SE: true,
            TX: false,
            OOM: false,
          },
          image:
            "https://assets.rtg-dev.com/product/palm-grove-toffee-3-pc-queen-panel-bed_3235304P_swatch-image-item?cache-id=440234ccaeb9b9e2d6f8776cc41dda58",
          route: "/palm-grove-toffee-3-pc-queen-panel-bed/3235304P",
        },
      ],
      finish: [
        {
          sku: "3245304P",
          variation_value: "Light Toffee",
          title: "Palm Grove Toffee 3 Pc King Panel Bed",
          catalog_availability: {
            FL: false,
            SE: true,
            TX: false,
            OOM: false,
          },
          image:
            "https://assets.rtg-dev.com/product/palm-grove-toffee-3-pc-king-panel-bed_3245304P_swatch-image-item?cache-id=34dc5d2650e6acd19189785ab4a2bdb6",
          route: "/palm-grove-toffee-3-pc-king-panel-bed/3245304P",
        },
        {
          sku: "3245306P",
          variation_value: "Light Brown",
          title: "Palm Grove Brown 3 Pc King Panel Bed",
          catalog_availability: {
            FL: false,
            SE: false,
            TX: true,
            OOM: false,
          },
          image:
            "https://assets.rtg-dev.com/product/palm-grove-brown-3-pc-king-panel-bed_3245306P_swatch-image-item?cache-id=7225772341ef611468ab983a32ea657a",
          route: "/palm-grove-brown-3-pc-king-panel-bed/3245306P",
        },
        {
          sku: "3245308P",
          variation_value: "White",
          title: "Palm Grove White 3 Pc King Panel Bed",
          catalog_availability: {
            FL: false,
            SE: true,
            TX: true,
            OOM: false,
          },
          image:
            "https://assets.rtg-dev.com/product/palm-grove-white-3-pc-king-panel-bed_3245308P_swatch-image-item?cache-id=47ff00d782aba59c862682717edb40c7",
          route: "/palm-grove-white-3-pc-king-panel-bed/3245308P",
        },
        {
          sku: "3245309P",
          variation_value: "White",
          title: "Palm Grove White 3 Pc King Panel Bed",
          catalog_availability: {
            FL: true,
            SE: false,
            TX: false,
            OOM: true,
          },
          image:
            "https://assets.rtg-dev.com/product/palm-grove-white-3-pc-king-panel-bed_3245309P_swatch-image-item?cache-id=bc7aae16045e83c25ed11096411e314f",
          route: "/palm-grove-white-3-pc-king-panel-bed/3245309P",
        },
      ],
    },
    decor: ["rustic"],
    dimensions: '84.5"l x 80"w x 52"h',
    finish: ["light toffee"],
    finish_family: ["light wood"],
    piececount: 3,
    size: "king",
    pricing: 599.99,
    on_sale: false,
    type: "item",
    title: "Palm Grove Toffee 3 Pc King Panel Bed",
    description:
      "Create a relaxed retreat with the coastal chic style of the Palm Grove bed. The headboard and footboard feature weathered plank detailing that, along with the wire brushed toffee finish, produce a casual look with understated appeal. Crafted with pine solids and pine veneers, the bed's straight lines reinforce the sophisticated simplicity.  Mattress and foundation (if required) sold separately.  Bed shown is queen size.",
    delivery_type: "D",
    catalog: "adult",
    room_type_code: "BR",
    single_item_room: false,
    sell_individually: true,
    mpn: "324-VD540",
    swatch_request_flag: false,
    generic_name: "3 pc king bed",
    monogram: false,
    customer_assembly_required: false,
    title_slug: "palm-grove-toffee-3-pc-king-panel-bed",
    vendorId: "RENR",
    primary_image:
      "https://assets.rtg-dev.com/product/palm-grove-toffee-3-pc-king-panel-bed_3245304P_image-item?cache-id=b81ab829289aa3b88fd303e74f53f8eb",
    grid_image:
      "https://assets.rtg-dev.com/product/palm-grove-toffee-3-pc-king-panel-bed_3245304P_grid-image-item?cache-id=e20f180298a4c478030910985a3d999c",
    high_res_image:
      "https://assets.rtg-dev.com/product/palm-grove-toffee-3-pc-king-panel-bed_3245304P_high-res-image-item?cache-id=ee28ad4a0c9206414fdd7b5fd578a582",
    swatch_image:
      "https://assets.rtg-dev.com/product/palm-grove-toffee-3-pc-king-panel-bed_3245304P_swatch-image-item?cache-id=34dc5d2650e6acd19189785ab4a2bdb6",
    alternate_images: [
      "https://assets.rtg-dev.com/product/palm-grove-toffee-5-pc-king-panel-bedroom_3225304P_image-room?cache-id=fe4b871793c20e488edf5ee42e3a7aa7",
      "https://assets.rtg-dev.com/product/palm-grove-toffee-3-pc-king-panel-bed_3245304P_dim-image?cache-id=ace9228b08efb0381af16700646e2b39",
    ],
    dimension_image:
      "https://assets.rtg-dev.com/product/palm-grove-toffee-3-pc-king-panel-bed_3245304P_dim-image?cache-id=ace9228b08efb0381af16700646e2b39",
    primary_image_item:
      "https://assets.rtg-dev.com/product/palm-grove-toffee-3-pc-king-panel-bed_3245304P_image-item?cache-id=b81ab829289aa3b88fd303e74f53f8eb",
    grid_image_item:
      "https://assets.rtg-dev.com/product/palm-grove-toffee-3-pc-king-panel-bed_3245304P_grid-image-item?cache-id=e20f180298a4c478030910985a3d999c",
    route: "/palm-grove-toffee-3-pc-king-panel-bed/3245304P",
    lastModified: "2022-10-15T04:04:24.144Z",
    createdAt: "2022-10-15T04:04:24.144Z",
    sku: "3245304P",
    collection: "palm grove",
    lastModified_c: "2020-05-27 08:55:49",
    category_c: "bedroom",
    bed_size_c: ["king"],
    design_c: ["panel"],
    feature_c: ["solid wood", "distressed finish"],
    finish_c: ["toffee"],
    headboard_design_c: ["wood"],
    material_c: ["wood"],
    style_c: ["modern", "contemporary", "traditional", "rustic"],
    main_category_c: "king beds",
  });
}
