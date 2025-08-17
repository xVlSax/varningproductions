<template>
  <div class="things-container text-white min-h-screen font-punk px-4 py-8">
    <h1 class="text-3xl md:text-5xl text-center mb-8 tracking-widest">Things To Do in Montreal</h1>

    <div v-for="section in categories" :key="section.title" class="font-things mb-12">
      <h2 class="font-h2 text-2xl md:text-3xl text-red-400 mb-4 border-b border-red-500 pb-2">
        {{ section.title }}
      </h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="place in section.places"
          :key="place.name"
          class="bg-zinc-900 p-4 rounded-lg shadow-lg border border-zinc-700"
        >
          <h3 class="font-things text-xl text-white mb-1">{{ place.name }}</h3>
          <a
            class="font-things text-sm text-blue-400 hover:underline italic mb-1 block"
            :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address)}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ place.address }}
          </a>
          <p class="font-things text-sm text-gray-400">{{ place.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    title: 'Alcohol',
    places: [
      {
        name: 'Cheval Blanc',
        address: '809 Ontario St E',
        description: 'Great brew pub in downtown. Friendly staff',
      },
      {
        name: "L'Espace Public",
        address: '3632 Ontario St E',
        description: 'Neighbourhood brew pub in Hochelaga Village',
      },
      {
        name: 'Dieu du ciel',
        address: '29 Avenue Laurier',
        description: 'Arguably the best/most famous brew pub',
      },
      {
        name: "L'Amère A Boire",
        address: '2049 Saint Denis St',
        description: 'Euro style brew pub',
      },
      {
        name: 'Street Drinking',
        address: 'Montreal',
        description: 'Cheaper option but be discreet',
      },
    ],
  },
  {
    title: 'Food & Poutine',
    places: [
      {
        name: 'Yogi',
        address: '3976 Ontario St E',
        description: 'Great Indian restaurant in Hochelaga',
      },
      {
        name: 'Copper Branch',
        address: '1180, W. Boul. de Maisonneuve',
        description: 'Vegan & vegetarian food (not far from where the festival is held)',
      },
      {
        name: 'Shawarmaz',
        address: '1340 St-Catherine W',
        description: 'Best Shawarmas/Falafel (not far from where the festival is held)',
      },
      {
        name: 'Le Trèfle Hochelaga',
        address: '3971 Ontario St E',
        description: 'Vegan brunch available Sat/Sun before 2pm',
      },
      {
        name: 'Resto-Bar Le Pick-Up',
        address: '3739 Ontario St E',
        description: 'Burger/Fries/Tacos -Punk Latinos Friends work there',
      },
      { name: 'Lafleur', address: '2120 Ontario St E', description: 'Poutine' },
      {
        name: 'Gerry’s',
        address: '3982 Rue Ontario E',
        description: 'Old dinner (breakfast, pizzas, poutine) in Hochelaga borough',
      },
      {
        name: 'La Belle Place',
        address: '3251 Rue Ontario E',
        description:
          'Cheap fast food with Poutine, vegetarian pitas and jumbo veggie dogs + cheap breakfast',
      },
      {
        name: 'Bloom Sushi',
        address: '288 Saint-Catherine St W',
        description: 'Vegetariand & vegan sushis',
      },
      {
        name: 'Boustan',
        address: '3417 Ontario St E',
        description: 'Classic Lebanese food',
      },
      {
        name: 'Pizzeria Zac',
        address: '8 Duluth Ave E',
        description:
          'Vegan pizza place (on the Plateau Mont-Royal, a bit far from the venue where the fest is held)',
      },
    ],
  },
  {
    title: 'Record Stores',
    places: [
      { name: 'Sonik', address: '4050 Rue Berri', description: 'THE punk record store' },
      {
        name: 'Cheap Thrills',
        address: '2044 Metcalfe',
        description: 'Oldest record store with diverse selection',
      },
      {
        name: 'Beatnick Records',
        address: '3770 Saint Denis St',
        description: 'Oldschool store with knowledgeable staff',
      },
      {
        name: 'Le Pick-up / LeBackstore',
        address: '169 Ave des Pins',
        description: 'Two great stores under one roof, lots of rare punk rock',
      },
      {
        name: 'Pump Up the Volume (Marche Noir)',
        address: '1359 Ontario E',
        description: 'Record shop inside a vintage store',
      },
      {
        name: 'Sound Central',
        address: '4486 Coloniale Ave',
        description: 'Run by Sean (Dopethrone), big selection',
      },
      {
        name: 'Aux 33 Tours',
        address: '1373 Mont-Royal Ave E',
        description: 'The biggest record store',
      },
    ],
  },
]
</script>

<style scoped>
.things-container {
  padding-top: calc(40px + 1rem);
}

h1 {
  text-shadow: 0 0 5px #f4f4f4e8;
  font-family: 'Defused', sans-serif;
}

.font-h2 {
  color: rgb(189, 189, 189);
  font-family: 'sans-serif', sans-serif;
}

.font-things {
  color: rgb(149, 149, 149);
  font-family: 'sans-serif', sans-serif;
}

a {
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: #f87171;
}
</style>
