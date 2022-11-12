<template>
  <div class="container mt-3">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">brand</th>
          <th scope="col">description</th>
          <th scope="col">filling amount</th>
          <th scope="col">packaging</th>
          <th scope="col">alcoholic</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in mockdata" :key="item.id">
          <tr>
            <td>{{ item.brand }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.fillingAmount }}</td>
            <td>{{ item.packaging }}</td>
            <td>{{ item.alcoholic }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProductView",
  components: {},
  data() {
    return {
      mockdata: [
        {
          id: 1,
          brand: "Arctic",
          description: "Jointfir",
          fillingAmount: "909 ml",
          packaging: "06 pcs.",
          alcoholic: false,
        },
        {
          id: 2,
          brand: "Caracal",
          description: "Nakedstem",
          fillingAmount: "188 ml",
          packaging: "52 pcs.",
          alcoholic: true,
        },
        {
          id: 3,
          brand: "Bandicoot",
          description: "Tawny",
          fillingAmount: "311 ml",
          packaging: "26 pcs.",
          alcoholic: true,
        },
        {
          id: 4,
          brand: "Meerkat",
          description: "Clustered",
          fillingAmount: "663 ml",
          packaging: "48 pcs.",
          alcoholic: true,
        },
        {
          id: 5,
          brand: "Marshbird",
          description: "Longleaf",
          fillingAmount: "754 ml",
          packaging: "47 pcs.",
          alcoholic: false,
        },
        {
          id: 6,
          brand: "Otter",
          description: "Bastard",
          fillingAmount: "825 ml",
          packaging: "99 pcs.",
          alcoholic: false,
        },
        {
          id: 7,
          brand: "Tern",
          description: "Trumpetweed",
          fillingAmount: "869 ml",
          packaging: "94 pcs.",
          alcoholic: true,
        },
        {
          id: 8,
          brand: "Crab-eating",
          description: "Scabland",
          fillingAmount: "898 ml",
          packaging: "97 pcs.",
          alcoholic: true,
        },
        {
          id: 9,
          brand: "Lizard",
          description: "Davidson's",
          fillingAmount: "387 ml",
          packaging: "97 pcs.",
          alcoholic: false,
        },
        {
          id: 10,
          brand: "Reedbuck",
          description: "Carolina",
          fillingAmount: "277 ml",
          packaging: "38 pcs.",
          alcoholic: true,
        },
        {
          id: 11,
          brand: "Eurasian",
          description: "Montezuma",
          fillingAmount: "577 ml",
          packaging: "03 pcs.",
          alcoholic: false,
        },
        {
          id: 12,
          brand: "Ostrich",
          description: "Intermountain",
          fillingAmount: "766 ml",
          packaging: "57 pcs.",
          alcoholic: true,
        },
        {
          id: 13,
          brand: "Savanna",
          description: "Natal",
          fillingAmount: "953 ml",
          packaging: "15 pcs.",
          alcoholic: true,
        },
        {
          id: 14,
          brand: "Wood",
          description: "Silvery",
          fillingAmount: "764 ml",
          packaging: "53 pcs.",
          alcoholic: false,
        },
        {
          id: 15,
          brand: "American",
          description: "Fringed",
          fillingAmount: "087 ml",
          packaging: "83 pcs.",
          alcoholic: true,
        },
        {
          id: 16,
          brand: "Vine",
          description: "Pore",
          fillingAmount: "433 ml",
          packaging: "59 pcs.",
          alcoholic: false,
        },
        {
          id: 17,
          brand: "Mandras",
          description: "Yellow",
          fillingAmount: "006 ml",
          packaging: "98 pcs.",
          alcoholic: true,
        },
        {
          id: 18,
          brand: "White-tailed",
          description: "Purdy's",
          fillingAmount: "093 ml",
          packaging: "28 pcs.",
          alcoholic: true,
        },
        {
          id: 19,
          brand: "Flamingo",
          description: "Polynesian",
          fillingAmount: "752 ml",
          packaging: "66 pcs.",
          alcoholic: false,
        },
        {
          id: 20,
          brand: "Common",
          description: "New",
          fillingAmount: "796 ml",
          packaging: "16 pcs.",
          alcoholic: false,
        },
        {
          id: 21,
          brand: "American",
          description: "Mock",
          fillingAmount: "782 ml",
          packaging: "37 pcs.",
          alcoholic: false,
        },
        {
          id: 22,
          brand: "Sunbird",
          description: "Bulbous",
          fillingAmount: "907 ml",
          packaging: "38 pcs.",
          alcoholic: false,
        },
        {
          id: 23,
          brand: "Prairie",
          description: "Dissotis",
          fillingAmount: "517 ml",
          packaging: "39 pcs.",
          alcoholic: false,
        },
        {
          id: 24,
          brand: "Common",
          description: "Starry",
          fillingAmount: "550 ml",
          packaging: "60 pcs.",
          alcoholic: true,
        },
        {
          id: 25,
          brand: "Rattlesnake",
          description: "Lace-leaved",
          fillingAmount: "333 ml",
          packaging: "83 pcs.",
          alcoholic: true,
        },
      ],
    };
  },
};
</script>
