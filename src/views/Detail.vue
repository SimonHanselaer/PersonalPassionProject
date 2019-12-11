<template>
  <div v-if="!computedLoadingState & !computedLoadingStateConfig" class="contentContainer">
    <button class="backButton" @click="handleBack">
      Back
      <svg
        width="16px"
        viewBox="0 0 20 17"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
        <title>left-arrow</title>
        <desc>Created with Sketch.</desc>
        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g
            id="SideBar"
            transform="translate(-63.000000, -683.000000)"
            fill="#FFFFFF"
            fill-rule="nonzero"
          >
            <g id="left-arrow" transform="translate(63.000000, 683.000000)">
              <path
                d="M18.8757724,6.76495935 L18.9069919,6.77178862 L5.52390244,6.77178862 L9.73105691,2.55536585 C9.93707317,2.3495122 10.0500813,2.07065041 10.0500813,1.77796748 C10.0500813,1.48528455 9.93707317,1.20837398 9.73105691,1.00203252 L9.07642276,0.347073171 C8.87056911,0.141219512 8.59626016,0.027398374 8.30373984,0.027398374 C8.01105691,0.027398374 7.73658537,0.140406504 7.53073171,0.346260163 L0.318861789,7.55747967 C0.112195122,7.76414634 -0.00081300813,8.03943089 -4.35631962e-06,8.33227642 C-0.00081300813,8.62674797 0.112195122,8.90219512 0.318861789,9.10853659 L7.53073171,16.3204065 C7.73658537,16.5260976 8.01089431,16.6392683 8.30373984,16.6392683 C8.59626016,16.6392683 8.87056911,16.525935 9.07642276,16.3204065 L9.73105691,15.6654472 C9.93707317,15.4599187 10.0500813,15.1854472 10.0500813,14.8927642 C10.0500813,14.6002439 9.93707317,14.3402439 9.73105691,14.1345528 L5.47642276,9.89455285 L18.8907317,9.89455285 C19.4934959,9.89455285 19.9999956,9.37504065 19.9999956,8.77260163 L19.9999956,7.84626016 C19.9999956,7.24382114 19.4785366,6.76495935 18.8757724,6.76495935 Z"
                id="Path"
              />
            </g>
          </g>
        </g>
      </svg>
    </button>
    <article v-if="this.$route.params.mediaType == 'movie'" class="detail">
      <h3 class="detailTitle header-5">{{ computedDetails.title }}</h3>
      <p class="detailGenre">{{ computedDetails.genres[0].name }}</p>
      <p class="detailRuntime">{{ computedRuntimeMovie }}</p>
      <p class="detailReleaseYear">{{ computedReleaseMovie }}</p>
      <section class="detailButtons">
        <button class="button" @click="addToListMovie">
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 10 10"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
            <title>add</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="Home"
                transform="translate(-1265.000000, -373.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
              >
                <g id="add" transform="translate(1265.000000, 373.000000)">
                  <path
                    d="M9.10714286,4.10714286 L6.07142857,4.10714286 C5.97281319,4.10714286 5.89285714,4.02718681 5.89285714,3.92857143 L5.89285714,0.892857143 C5.89285714,0.399780268 5.49307687,0 5,0 C4.50692313,0 4.10714286,0.399780268 4.10714286,0.892857143 L4.10714286,3.92857143 C4.10714286,4.02718681 4.02718681,4.10714286 3.92857143,4.10714286 L0.892857143,4.10714286 C0.399780268,4.10714286 0,4.50692313 0,5 C0,5.49307687 0.399780268,5.89285714 0.892857143,5.89285714 L3.92857143,5.89285714 C4.02718681,5.89285714 4.10714286,5.97281319 4.10714286,6.07142857 L4.10714286,9.10714286 C4.10714286,9.60021973 4.50692313,10 5,10 C5.49307687,10 5.89285714,9.60021973 5.89285714,9.10714286 L5.89285714,6.07142857 C5.89285714,5.97281319 5.97281319,5.89285714 6.07142857,5.89285714 L9.10714286,5.89285714 C9.60021973,5.89285714 10,5.49307687 10,5 C10,4.50692313 9.60021973,4.10714286 9.10714286,4.10714286 Z"
                    id="Path"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
        <button class="button" @click="addToSeen">
          <svg
            width="22px"
            height="14.52px"
            viewBox="0 0 12 8"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
            <title>view</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="Home"
                transform="translate(-1372.000000, -416.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
              >
                <g id="view" transform="translate(1372.000000, 416.000000)">
                  <path
                    d="M11.9237109,3.61033594 C11.8165078,3.4636875 9.26221875,0.0195703125 5.99992969,0.0195703125 C2.73764063,0.0195703125 0.183234375,3.4636875 0.0761484375,3.61019531 C-0.0253828125,3.74932031 -0.0253828125,3.93801562 0.0761484375,4.07714062 C0.183234375,4.22378906 2.73764063,7.66790625 5.99992969,7.66790625 C9.26221875,7.66790625 11.8165078,4.22376562 11.9237109,4.07725781 C12.0253828,3.93815625 12.0253828,3.74932031 11.9237109,3.61033594 Z M5.99992969,6.87670312 C3.59690625,6.87670312 1.51563281,4.59077344 0.89953125,3.84346875 C1.51483594,3.09550781 3.59175,0.810773437 5.99992969,0.810773437 C8.40283594,0.810773437 10.4839688,3.09630469 11.1003281,3.84400781 C10.4850234,4.59194531 8.40810938,6.87670312 5.99992969,6.87670312 Z"
                    id="Shape"
                  />
                  <path
                    d="M5.99992969,1.47011719 C4.69113281,1.47011719 3.62629687,2.53495312 3.62629687,3.84375 C3.62629687,5.15254687 4.69113281,6.21738281 5.99992969,6.21738281 C7.30872656,6.21738281 8.3735625,5.15254687 8.3735625,3.84375 C8.3735625,2.53495312 7.30872656,1.47011719 5.99992969,1.47011719 Z M5.99992969,5.42615625 C5.12735156,5.42615625 4.41752344,4.71630469 4.41752344,3.84375 C4.41752344,2.97119531 5.127375,2.26134375 5.99992969,2.26134375 C6.87248438,2.26134375 7.58233594,2.97119531 7.58233594,3.84375 C7.58233594,4.71630469 6.87250781,5.42615625 5.99992969,5.42615625 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
        <button class="button" @click="addMediaItemMovie">
          <svg
            width="22px"
            height="20px"
            viewBox="0 0 22 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
            <title>heart</title>
            <desc>Created with Sketch.</desc>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="MediaTile"
                transform="translate(-9.000000, -9.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
                stroke="#FFFFFF"
              >
                <g id="heart" transform="translate(10.000000, 10.000000)">
                  <path
                    d="M18.3729237,1.65258475 C17.3263136,0.605974576 15.9407203,0.033940678 14.4619068,0.033940678 C12.9830932,0.033940678 11.5932627,0.610211864 10.5466525,1.65682203 L10.0000424,2.2034322 L9.44495763,1.64834746 C8.39834746,0.601737288 7.00427966,0.0212288136 5.5254661,0.0212288136 C4.05088983,0.0212288136 2.66105932,0.5975 1.61868644,1.63987288 C0.572076271,2.68648305 -0.00419491525,4.07631356 1.91706901e-05,5.55512712 C1.91706901e-05,7.03394068 0.580550847,8.4195339 1.62716102,9.46614407 L9.58478814,17.4237712 C9.69495763,17.5339407 9.84326271,17.5932627 9.98733051,17.5932627 C10.1313983,17.5932627 10.2797034,17.538178 10.3898729,17.4280085 L18.3644492,9.48309322 C19.4110593,8.43648305 19.9873539,7.04665254 19.9873539,5.56783898 C19.9915678,4.08902542 19.4195339,2.69919492 18.3729237,1.65258475 Z M17.5593644,8.67377119 L9.98733051,16.2161441 L2.43224576,8.66105932 C1.60173729,7.83055085 1.14411017,6.72885593 1.14411017,5.55512712 C1.14411017,4.38139831 1.5975,3.27970339 2.42800847,2.4534322 C3.25427966,1.62716102 4.35597458,1.1695339 5.5254661,1.1695339 C6.69919492,1.1695339 7.80512712,1.62716102 8.63563559,2.45766949 L9.59326271,3.41529661 C9.81783898,3.63987288 10.1780085,3.63987288 10.4025847,3.41529661 L11.3517373,2.46614407 C12.1822458,1.63563559 13.288178,1.17800847 14.4576695,1.17800847 C15.627161,1.17800847 16.7288559,1.63563559 17.5593644,2.46190678 C18.3898729,3.29241525 18.8432919,4.39411017 18.8432919,5.56783898 C18.8475,6.7415678 18.3898729,7.84326271 17.5593644,8.67377119 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
      </section>
      <section class="detailOverview">
        <h4 class="header-6">Description</h4>
        <p>{{ computedDetails.overview }}</p>
      </section>
      <div class="detailRating">
        <p>{{ computedDetails.vote_average }}</p>
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 15 15"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
          <title>star</title>
          <desc>Created with Sketch.</desc>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              id="Detail"
              transform="translate(-1340.000000, -137.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <g id="star" transform="translate(1340.000000, 137.000000)">
                <path
                  d="M14.6568,6.5193 C14.9517,6.2319 15.0558,5.8101 14.9286,5.418 C14.8011,5.0259 14.469,4.746 14.061,4.6866 L10.4334,4.1595 C10.2789,4.137 10.1454,4.0401 10.0764,3.9 L8.4546,0.6129 C8.2725,0.2436 7.9029,0.0141 7.491,0.0141 C7.0794,0.0141 6.7098,0.2436 6.5277,0.6129 L4.9056,3.9 C4.8366,4.0401 4.7028,4.137 4.5483,4.1595 L0.9207,4.6869 C0.513,4.746 0.1809,5.0259 0.0534,5.418 C-0.0738,5.8101 0.0303,6.2319 0.3252,6.5193 L2.9499,9.0777 C3.0618,9.1869 3.1131,9.3441 3.0867,9.4977 L2.4672,13.1106 C2.3976,13.5165 2.5611,13.9188 2.8944,14.1612 C3.2274,14.4039 3.6609,14.4354 4.026,14.2431 L7.2702,12.5373 C7.4085,12.4647 7.5735,12.4647 7.7118,12.5373 L10.9563,14.2431 C11.1147,14.3265 11.2863,14.3676 11.457,14.3676 C11.6787,14.3676 11.8995,14.2983 12.0879,14.1612 C12.4212,13.9188 12.5847,13.5165 12.5151,13.1106 L11.8953,9.498 C11.8689,9.3441 11.9202,9.1872 12.0321,9.078 L14.6568,6.5193 Z"
                  id="Shape"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <img
        class="detailImage"
        :src="
          computedConfig.images.base_url +
            computedConfig.images.poster_sizes[4] +
            computedDetails.poster_path
        "
        height="400"
        alt
      />
      <a
        target="_blank"
        class="detailImdb header-7"
        :href="'https://www.imdb.com/title/' + computedDetails.imdb_id"
      >View on IMDB</a>
      <section class="detailCast">
        <h4 class="header-6">Cast</h4>
        <ul class="castList">
          <li v-for="actor in computedActors" v-bind:key="actor.id">
            <a
              target="_blank"
              :href="'https://www.imdb.com/name/' + actor.imdb_id"
              class="castTile"
            >
              <img
                class="castImage"
                :src="
                  computedConfig.images.base_url +
                    computedConfig.images.poster_sizes[4] +
                    actor.profile_path
                "
                height="300"
                alt
              />
              <p class="castName">{{ actor.name }}</p>
            </a>
          </li>
        </ul>
      </section>

      <section class="detailSimilar">
        <h4 class="header-6">Similar movies</h4>
        <MediaList :media="computedSimilar">
          <MediaTile
            slot-scope="mediaItem"
            :title="mediaItem.title"
            :src="
          computedConfig.images.base_url +
            computedConfig.images.poster_sizes[4] +
            mediaItem.poster_path
        "
            :id="mediaItem.id"
            :mediaType="'movie'"
            :duration="0"
            :releaseDate="mediaItem.release_date"
          />
        </MediaList>
      </section>

      <section class="detailDetails">
        <h4 class="header-6">Details</h4>
        <div>
          <h5 class="header-7">Director</h5>
          <p>{{ computedDirector[0].name }}</p>
        </div>
        <div>
          <h5 class="header-7">Release date</h5>
          <p>{{ computedReleaseMovieFull }}</p>
        </div>
      </section>
      <div class="detailBorder"></div>
      <img
        class="detailBackdrop"
        :src="
          computedConfig.images.base_url +
            computedConfig.images.backdrop_sizes[3] +
            computedDetails.backdrop_path
        "
        width="1280"
        alt
      />
    </article>
    <article v-else-if="this.$route.params.mediaType == 'tv'" class="detail">
      <h3 class="detailTitle header-5">{{ computedDetails.name }}</h3>
      <p class="detailGenre">{{ computedDetails.genres[0].name }}</p>
      <p class="detailRuntime">{{ computedRuntimeSerie }}</p>
      <p class="detailReleaseYear">{{ computedReleaseSerie }}</p>
      <section class="detailButtons">
        <button class="button" @click="addToListSerie">
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 10 10"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
            <title>add</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="Home"
                transform="translate(-1265.000000, -373.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
              >
                <g id="add" transform="translate(1265.000000, 373.000000)">
                  <path
                    d="M9.10714286,4.10714286 L6.07142857,4.10714286 C5.97281319,4.10714286 5.89285714,4.02718681 5.89285714,3.92857143 L5.89285714,0.892857143 C5.89285714,0.399780268 5.49307687,0 5,0 C4.50692313,0 4.10714286,0.399780268 4.10714286,0.892857143 L4.10714286,3.92857143 C4.10714286,4.02718681 4.02718681,4.10714286 3.92857143,4.10714286 L0.892857143,4.10714286 C0.399780268,4.10714286 0,4.50692313 0,5 C0,5.49307687 0.399780268,5.89285714 0.892857143,5.89285714 L3.92857143,5.89285714 C4.02718681,5.89285714 4.10714286,5.97281319 4.10714286,6.07142857 L4.10714286,9.10714286 C4.10714286,9.60021973 4.50692313,10 5,10 C5.49307687,10 5.89285714,9.60021973 5.89285714,9.10714286 L5.89285714,6.07142857 C5.89285714,5.97281319 5.97281319,5.89285714 6.07142857,5.89285714 L9.10714286,5.89285714 C9.60021973,5.89285714 10,5.49307687 10,5 C10,4.50692313 9.60021973,4.10714286 9.10714286,4.10714286 Z"
                    id="Path"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
        <button class="button" @click="addToSeenSerie">
          <svg
            width="22px"
            height="14.52px"
            viewBox="0 0 12 8"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
            <title>view</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="Home"
                transform="translate(-1372.000000, -416.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
              >
                <g id="view" transform="translate(1372.000000, 416.000000)">
                  <path
                    d="M11.9237109,3.61033594 C11.8165078,3.4636875 9.26221875,0.0195703125 5.99992969,0.0195703125 C2.73764063,0.0195703125 0.183234375,3.4636875 0.0761484375,3.61019531 C-0.0253828125,3.74932031 -0.0253828125,3.93801562 0.0761484375,4.07714062 C0.183234375,4.22378906 2.73764063,7.66790625 5.99992969,7.66790625 C9.26221875,7.66790625 11.8165078,4.22376562 11.9237109,4.07725781 C12.0253828,3.93815625 12.0253828,3.74932031 11.9237109,3.61033594 Z M5.99992969,6.87670312 C3.59690625,6.87670312 1.51563281,4.59077344 0.89953125,3.84346875 C1.51483594,3.09550781 3.59175,0.810773437 5.99992969,0.810773437 C8.40283594,0.810773437 10.4839688,3.09630469 11.1003281,3.84400781 C10.4850234,4.59194531 8.40810938,6.87670312 5.99992969,6.87670312 Z"
                    id="Shape"
                  />
                  <path
                    d="M5.99992969,1.47011719 C4.69113281,1.47011719 3.62629687,2.53495312 3.62629687,3.84375 C3.62629687,5.15254687 4.69113281,6.21738281 5.99992969,6.21738281 C7.30872656,6.21738281 8.3735625,5.15254687 8.3735625,3.84375 C8.3735625,2.53495312 7.30872656,1.47011719 5.99992969,1.47011719 Z M5.99992969,5.42615625 C5.12735156,5.42615625 4.41752344,4.71630469 4.41752344,3.84375 C4.41752344,2.97119531 5.127375,2.26134375 5.99992969,2.26134375 C6.87248438,2.26134375 7.58233594,2.97119531 7.58233594,3.84375 C7.58233594,4.71630469 6.87250781,5.42615625 5.99992969,5.42615625 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
        <button class="button" @click="addMediaItemSerie">
          <svg
            width="22px"
            height="20px"
            viewBox="0 0 22 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
            <title>heart</title>
            <desc>Created with Sketch.</desc>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="MediaTile"
                transform="translate(-9.000000, -9.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
                stroke="#FFFFFF"
              >
                <g id="heart" transform="translate(10.000000, 10.000000)">
                  <path
                    d="M18.3729237,1.65258475 C17.3263136,0.605974576 15.9407203,0.033940678 14.4619068,0.033940678 C12.9830932,0.033940678 11.5932627,0.610211864 10.5466525,1.65682203 L10.0000424,2.2034322 L9.44495763,1.64834746 C8.39834746,0.601737288 7.00427966,0.0212288136 5.5254661,0.0212288136 C4.05088983,0.0212288136 2.66105932,0.5975 1.61868644,1.63987288 C0.572076271,2.68648305 -0.00419491525,4.07631356 1.91706901e-05,5.55512712 C1.91706901e-05,7.03394068 0.580550847,8.4195339 1.62716102,9.46614407 L9.58478814,17.4237712 C9.69495763,17.5339407 9.84326271,17.5932627 9.98733051,17.5932627 C10.1313983,17.5932627 10.2797034,17.538178 10.3898729,17.4280085 L18.3644492,9.48309322 C19.4110593,8.43648305 19.9873539,7.04665254 19.9873539,5.56783898 C19.9915678,4.08902542 19.4195339,2.69919492 18.3729237,1.65258475 Z M17.5593644,8.67377119 L9.98733051,16.2161441 L2.43224576,8.66105932 C1.60173729,7.83055085 1.14411017,6.72885593 1.14411017,5.55512712 C1.14411017,4.38139831 1.5975,3.27970339 2.42800847,2.4534322 C3.25427966,1.62716102 4.35597458,1.1695339 5.5254661,1.1695339 C6.69919492,1.1695339 7.80512712,1.62716102 8.63563559,2.45766949 L9.59326271,3.41529661 C9.81783898,3.63987288 10.1780085,3.63987288 10.4025847,3.41529661 L11.3517373,2.46614407 C12.1822458,1.63563559 13.288178,1.17800847 14.4576695,1.17800847 C15.627161,1.17800847 16.7288559,1.63563559 17.5593644,2.46190678 C18.3898729,3.29241525 18.8432919,4.39411017 18.8432919,5.56783898 C18.8475,6.7415678 18.3898729,7.84326271 17.5593644,8.67377119 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
      </section>
      <section class="detailOverview">
        <h4 class="header-6">Description</h4>
        <p class="detailOverviewText">{{ computedDetails.overview }}</p>
      </section>
      <div class="detailRating">
        <p>{{ computedDetails.vote_average }}</p>
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 15 15"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
          <title>star</title>
          <desc>Created with Sketch.</desc>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              id="Detail"
              transform="translate(-1340.000000, -137.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <g id="star" transform="translate(1340.000000, 137.000000)">
                <path
                  d="M14.6568,6.5193 C14.9517,6.2319 15.0558,5.8101 14.9286,5.418 C14.8011,5.0259 14.469,4.746 14.061,4.6866 L10.4334,4.1595 C10.2789,4.137 10.1454,4.0401 10.0764,3.9 L8.4546,0.6129 C8.2725,0.2436 7.9029,0.0141 7.491,0.0141 C7.0794,0.0141 6.7098,0.2436 6.5277,0.6129 L4.9056,3.9 C4.8366,4.0401 4.7028,4.137 4.5483,4.1595 L0.9207,4.6869 C0.513,4.746 0.1809,5.0259 0.0534,5.418 C-0.0738,5.8101 0.0303,6.2319 0.3252,6.5193 L2.9499,9.0777 C3.0618,9.1869 3.1131,9.3441 3.0867,9.4977 L2.4672,13.1106 C2.3976,13.5165 2.5611,13.9188 2.8944,14.1612 C3.2274,14.4039 3.6609,14.4354 4.026,14.2431 L7.2702,12.5373 C7.4085,12.4647 7.5735,12.4647 7.7118,12.5373 L10.9563,14.2431 C11.1147,14.3265 11.2863,14.3676 11.457,14.3676 C11.6787,14.3676 11.8995,14.2983 12.0879,14.1612 C12.4212,13.9188 12.5847,13.5165 12.5151,13.1106 L11.8953,9.498 C11.8689,9.3441 11.9202,9.1872 12.0321,9.078 L14.6568,6.5193 Z"
                  id="Shape"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <img
        class="detailImage"
        :src="
          computedConfig.images.base_url +
            computedConfig.images.poster_sizes[4] +
            computedDetails.poster_path
        "
        height="400"
        alt
      />
      <a
        target="_blank"
        class="detailImdb header-7"
        :href="'https://www.imdb.com/title/' + computedExternalId.imdb_id"
      >View on IMDB</a>
      <section class="detailCast">
        <h4 class="header-6">Cast</h4>
        <ul class="castList">
          <li v-for="actor in computedActors" v-bind:key="actor.id">
            <a
              target="_blank"
              :href="'https://www.imdb.com/name/' + actor.imdb_id"
              class="castTile"
            >
              <img
                class="castImage"
                :src="
                  computedConfig.images.base_url +
                    computedConfig.images.poster_sizes[4] +
                    actor.profile_path
                "
                height="300"
                alt
              />
              <p class="castName">{{ actor.name }}</p>
            </a>
          </li>
        </ul>
      </section>

      <section class="detailSimilar">
        <h4 class="header-6">Similar Series</h4>
        <MediaList :media="computedSimilar">
          <MediaTile
            slot-scope="mediaItem"
            :title="mediaItem.name"
            :src="
          computedConfig.images.base_url +
            computedConfig.images.poster_sizes[4] +
            mediaItem.poster_path
        "
            :id="mediaItem.id"
            :mediaType="'tv'"
            :duration="0"
            :releaseDate="mediaItem.first_air_date"
          />
        </MediaList>
      </section>

      <section class="detailDetails">
        <h4 class="header-6">Details</h4>
        <div>
          <h5 class="header-7">Creators</h5>
          <ul>
            <li
              v-for="creator in computedDetails.created_by"
              v-bind:key="creator.id"
            >{{ creator.name }}</li>
          </ul>
        </div>
        <div
          v-if="
            computedDetails.in_production &
              (computedDetails.next_episode_to_air != null)
          "
        >
          <h5 class="header-7">Next episode</h5>
          <p>{{ computedReleaseSerieFull }}</p>
        </div>
        <div v-if="!computedDetails.in_production">
          <h5 class="header-7">Status</h5>
          <p>Ended</p>
        </div>
      </section>
      <div class="detailBorder"></div>
      <img
        class="detailBackdrop"
        :src="
          computedConfig.images.base_url +
            computedConfig.images.backdrop_sizes[3] +
            computedDetails.backdrop_path
        "
        width="1280"
        alt
      />
    </article>

    <article v-else-if="this.$route.params.mediaType == 'game'" class="detail">
      <h3 class="detailTitle header-5">{{ computedDetails.name }}</h3>
      <p class="detailGenre">{{ computedDetails.genre }}</p>
      <p class="detailReleaseYear">{{ computedRelease }}</p>
      <section class="detailButtons">
        <button class="button" @click="addToListGame">
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 10 10"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
            <title>add</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="Home"
                transform="translate(-1265.000000, -373.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
              >
                <g id="add" transform="translate(1265.000000, 373.000000)">
                  <path
                    d="M9.10714286,4.10714286 L6.07142857,4.10714286 C5.97281319,4.10714286 5.89285714,4.02718681 5.89285714,3.92857143 L5.89285714,0.892857143 C5.89285714,0.399780268 5.49307687,0 5,0 C4.50692313,0 4.10714286,0.399780268 4.10714286,0.892857143 L4.10714286,3.92857143 C4.10714286,4.02718681 4.02718681,4.10714286 3.92857143,4.10714286 L0.892857143,4.10714286 C0.399780268,4.10714286 0,4.50692313 0,5 C0,5.49307687 0.399780268,5.89285714 0.892857143,5.89285714 L3.92857143,5.89285714 C4.02718681,5.89285714 4.10714286,5.97281319 4.10714286,6.07142857 L4.10714286,9.10714286 C4.10714286,9.60021973 4.50692313,10 5,10 C5.49307687,10 5.89285714,9.60021973 5.89285714,9.10714286 L5.89285714,6.07142857 C5.89285714,5.97281319 5.97281319,5.89285714 6.07142857,5.89285714 L9.10714286,5.89285714 C9.60021973,5.89285714 10,5.49307687 10,5 C10,4.50692313 9.60021973,4.10714286 9.10714286,4.10714286 Z"
                    id="Path"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
        <button class="button" @click="addToSeenGame">
          <svg
            width="22px"
            height="14.52px"
            viewBox="0 0 12 8"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
            <title>view</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="Home"
                transform="translate(-1372.000000, -416.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
              >
                <g id="view" transform="translate(1372.000000, 416.000000)">
                  <path
                    d="M11.9237109,3.61033594 C11.8165078,3.4636875 9.26221875,0.0195703125 5.99992969,0.0195703125 C2.73764063,0.0195703125 0.183234375,3.4636875 0.0761484375,3.61019531 C-0.0253828125,3.74932031 -0.0253828125,3.93801562 0.0761484375,4.07714062 C0.183234375,4.22378906 2.73764063,7.66790625 5.99992969,7.66790625 C9.26221875,7.66790625 11.8165078,4.22376562 11.9237109,4.07725781 C12.0253828,3.93815625 12.0253828,3.74932031 11.9237109,3.61033594 Z M5.99992969,6.87670312 C3.59690625,6.87670312 1.51563281,4.59077344 0.89953125,3.84346875 C1.51483594,3.09550781 3.59175,0.810773437 5.99992969,0.810773437 C8.40283594,0.810773437 10.4839688,3.09630469 11.1003281,3.84400781 C10.4850234,4.59194531 8.40810938,6.87670312 5.99992969,6.87670312 Z"
                    id="Shape"
                  />
                  <path
                    d="M5.99992969,1.47011719 C4.69113281,1.47011719 3.62629687,2.53495312 3.62629687,3.84375 C3.62629687,5.15254687 4.69113281,6.21738281 5.99992969,6.21738281 C7.30872656,6.21738281 8.3735625,5.15254687 8.3735625,3.84375 C8.3735625,2.53495312 7.30872656,1.47011719 5.99992969,1.47011719 Z M5.99992969,5.42615625 C5.12735156,5.42615625 4.41752344,4.71630469 4.41752344,3.84375 C4.41752344,2.97119531 5.127375,2.26134375 5.99992969,2.26134375 C6.87248438,2.26134375 7.58233594,2.97119531 7.58233594,3.84375 C7.58233594,4.71630469 6.87250781,5.42615625 5.99992969,5.42615625 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
        <button class="button" @click="addMediaItemGame">
          <svg
            width="22px"
            height="20px"
            viewBox="0 0 22 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
            <title>heart</title>
            <desc>Created with Sketch.</desc>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="MediaTile"
                transform="translate(-9.000000, -9.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
                stroke="#FFFFFF"
              >
                <g id="heart" transform="translate(10.000000, 10.000000)">
                  <path
                    d="M18.3729237,1.65258475 C17.3263136,0.605974576 15.9407203,0.033940678 14.4619068,0.033940678 C12.9830932,0.033940678 11.5932627,0.610211864 10.5466525,1.65682203 L10.0000424,2.2034322 L9.44495763,1.64834746 C8.39834746,0.601737288 7.00427966,0.0212288136 5.5254661,0.0212288136 C4.05088983,0.0212288136 2.66105932,0.5975 1.61868644,1.63987288 C0.572076271,2.68648305 -0.00419491525,4.07631356 1.91706901e-05,5.55512712 C1.91706901e-05,7.03394068 0.580550847,8.4195339 1.62716102,9.46614407 L9.58478814,17.4237712 C9.69495763,17.5339407 9.84326271,17.5932627 9.98733051,17.5932627 C10.1313983,17.5932627 10.2797034,17.538178 10.3898729,17.4280085 L18.3644492,9.48309322 C19.4110593,8.43648305 19.9873539,7.04665254 19.9873539,5.56783898 C19.9915678,4.08902542 19.4195339,2.69919492 18.3729237,1.65258475 Z M17.5593644,8.67377119 L9.98733051,16.2161441 L2.43224576,8.66105932 C1.60173729,7.83055085 1.14411017,6.72885593 1.14411017,5.55512712 C1.14411017,4.38139831 1.5975,3.27970339 2.42800847,2.4534322 C3.25427966,1.62716102 4.35597458,1.1695339 5.5254661,1.1695339 C6.69919492,1.1695339 7.80512712,1.62716102 8.63563559,2.45766949 L9.59326271,3.41529661 C9.81783898,3.63987288 10.1780085,3.63987288 10.4025847,3.41529661 L11.3517373,2.46614407 C12.1822458,1.63563559 13.288178,1.17800847 14.4576695,1.17800847 C15.627161,1.17800847 16.7288559,1.63563559 17.5593644,2.46190678 C18.3898729,3.29241525 18.8432919,4.39411017 18.8432919,5.56783898 C18.8475,6.7415678 18.3898729,7.84326271 17.5593644,8.67377119 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
      </section>
      <section class="detailOverview">
        <h4 class="header-6">Description</h4>
        <p class="detailOverviewText">{{ computedDetails.summary }}</p>
      </section>
      <p class="detailRating">
        {{ computedRating }}
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 15 15"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
          <title>star</title>
          <desc>Created with Sketch.</desc>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              id="Detail"
              transform="translate(-1340.000000, -137.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <g id="star" transform="translate(1340.000000, 137.000000)">
                <path
                  d="M14.6568,6.5193 C14.9517,6.2319 15.0558,5.8101 14.9286,5.418 C14.8011,5.0259 14.469,4.746 14.061,4.6866 L10.4334,4.1595 C10.2789,4.137 10.1454,4.0401 10.0764,3.9 L8.4546,0.6129 C8.2725,0.2436 7.9029,0.0141 7.491,0.0141 C7.0794,0.0141 6.7098,0.2436 6.5277,0.6129 L4.9056,3.9 C4.8366,4.0401 4.7028,4.137 4.5483,4.1595 L0.9207,4.6869 C0.513,4.746 0.1809,5.0259 0.0534,5.418 C-0.0738,5.8101 0.0303,6.2319 0.3252,6.5193 L2.9499,9.0777 C3.0618,9.1869 3.1131,9.3441 3.0867,9.4977 L2.4672,13.1106 C2.3976,13.5165 2.5611,13.9188 2.8944,14.1612 C3.2274,14.4039 3.6609,14.4354 4.026,14.2431 L7.2702,12.5373 C7.4085,12.4647 7.5735,12.4647 7.7118,12.5373 L10.9563,14.2431 C11.1147,14.3265 11.2863,14.3676 11.457,14.3676 C11.6787,14.3676 11.8995,14.2983 12.0879,14.1612 C12.4212,13.9188 12.5847,13.5165 12.5151,13.1106 L11.8953,9.498 C11.8689,9.3441 11.9202,9.1872 12.0321,9.078 L14.6568,6.5193 Z"
                  id="Shape"
                />
              </g>
            </g>
          </g>
        </svg>
      </p>
      <img
        class="detailImage"
        :src="
          'https://images.igdb.com/igdb/image/upload/t_720p/' +
            computedDetails.cover +
            '.jpg'
        "
        height="400"
        width="267"
        alt
      />
      <div class="detailBorder"></div>
      <img
        class="detailBackdrop"
        :src="
          'https://images.igdb.com/igdb/image/upload/t_screenshot_huge/' +
            computedDetails.screenshot +
            '.jpg'
        "
        width="1280"
        alt
      />
    </article>
    <article v-else>
      <p>Something went wrong!</p>
    </article>
  </div>
  <Loading v-else />
</template>

<script>
const moment = require("moment");
import store from "./../store/index";
import Loading from "./../components/Loading";
import MediaList from "./../components/MediaList";
import MediaTile from "./../components/MediaTile";

export default {
  name: "detail",
  components: { Loading, MediaList, MediaTile },
  data() {
    return {
      properties: {
        id: this.$route.params.detailId,
        type: this.$route.params.mediaType
      }
    };
  },
  watch: {
    $route: {
      deep: true,
      handler: function() {
        this.properties = {
          id: this.$route.params.detailId,
          type: this.$route.params.mediaType
        };
        this.$store.dispatch("fetchDetails", this.properties);
        this.$store.dispatch("fetchConfig");
      }
    }
  },
  created() {
    this.$store.dispatch("fetchDetails", this.properties);
    this.$store.dispatch("fetchConfig");
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
    addMediaItemMovie() {
      let self = this;

      let data = {
        id: self.computedDetails.id,
        title: self.computedDetails.title,
        src:
          self.computedConfig.images.base_url +
          self.computedConfig.images.poster_sizes[4] +
          self.computedDetails.poster_path,
        type: "movie",
        duration: self.computedDetails.runtime,
        releaseDate: self.computedDetails.release_date
      };
      console.log(data);
      this.$store.dispatch("addWatchlistItem", data);
    },
    addMediaItemSerie() {
      let self = this;

      let data = {
        id: self.computedDetails.id,
        title: self.computedDetails.name,
        src:
          self.computedConfig.images.base_url +
          self.computedConfig.images.poster_sizes[4] +
          self.computedDetails.poster_path,
        type: "tv",
        duration: self.computedDetails.episode_run_time[0],
        releaseDate: self.computedDetails.first_air_date
      };
      console.log(data);
      this.$store.dispatch("addWatchlistItem", data);
    },
    addMediaItemGame() {
      let self = this;

      let data = {
        id: self.computedDetails.id,
        title: self.computedDetails.name,
        src:
          "https://images.igdb.com/igdb/image/upload/t_720p/" +
          self.computedDetails.cover +
          ".jpg",
        type: "game",
        duration: 0,
        releaseDate: self.computedRelease
      };
      console.log(data);
      this.$store.dispatch("addWatchlistItem", data);
    },
    addToListMovie() {
      let self = this;
      const modalData = {
        title: self.computedDetails.title,
        id: self.computedDetails.id,
        src:
          self.computedConfig.images.base_url +
          self.computedConfig.images.poster_sizes[4] +
          self.computedDetails.poster_path,
        releaseDate: self.computedDetails.release_date,
        duration: self.computedDetails.runtime,
        mediaType: "movie"
      };

      this.$store.dispatch("setModalValues", modalData);

      this.$modal.show("addMediaToList");
    },
    addToListSerie() {
      let self = this;
      const modalData = {
        title: self.computedDetails.name,
        id: self.computedDetails.id,
        src:
          self.computedConfig.images.base_url +
          self.computedConfig.images.poster_sizes[4] +
          self.computedDetails.poster_path,
        releaseDate: self.computedDetails.first_air_date,
        duration: self.computedDetails.episode_run_time[0],
        mediaType: "tv"
      };

      this.$store.dispatch("setModalValues", modalData);

      this.$modal.show("addMediaToList");
    },
    addToListGame() {
      let self = this;
      const modalData = {
        title: self.computedDetails.name,
        id: self.computedDetails.id,
        src:
          "https://images.igdb.com/igdb/image/upload/t_720p/" +
          self.computedDetails.cover +
          ".jpg",
        releaseDate: self.computedRelease,
        duration: 0,
        mediaType: "game"
      };

      this.$store.dispatch("setModalValues", modalData);

      this.$modal.show("addMediaToList");
    },
    addToSeen() {
      let self = this;

      let today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const yyyy = today.getFullYear();

      today = yyyy + "-" + mm + "-" + dd;

      const props = { id: self.computedDetails.id, timestamp: today };
      this.$store.dispatch("addToWatched", props);
    },
    addToSeenSerie() {
      let self = this;

      let today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const yyyy = today.getFullYear();

      today = yyyy + "-" + mm + "-" + dd;

      const props = { id: self.computedDetails.id, timestamp: today };
      this.$store.dispatch("addToWatchedSeries", props);
    },
    addToSeenGame() {
      let self = this;

      let today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const yyyy = today.getFullYear();

      today = yyyy + "-" + mm + "-" + dd;

      const props = { id: self.computedDetails.id, timestamp: today };
      this.$store.dispatch("addToPlayedGames", props);
    }
  },
  computed: {
    computedDetails() {
      return store.state.mediaDetails;
    },
    computedCredits() {
      return store.state.mediaDetailsCredits;
    },
    computedExternalId() {
      return store.state.mediaDetailsExternalId;
    },
    computedConfig() {
      return store.state.config;
    },
    computedLoadingState() {
      return store.state.loadingStatusDetails;
    },
    computedLoadingStateConfig() {
      return store.state.loadingStatusConfig;
    },
    computedActors() {
      return store.state.mediaDetailsCast;
    },
    computedDirector() {
      return store.state.mediaDetailsCredits.crew.filter(person => {
        return person.job == "Director";
      });
    },
    computedRating() {
      return Math.round(store.state.mediaDetails.rating) / 10;
    },
    computedRelease() {
      return new Date(
        store.state.mediaDetails.first_release_date * 1000
      ).getFullYear();
    },
    computedReleaseMovie() {
      return store.state.mediaDetails.release_date.slice(0, 4);
    },

    computedReleaseMovieFull() {
      const date = store.state.mediaDetails.release_date;
      const dateFormat = moment(date, "YYYY-MM-DD");
      return dateFormat.format("Do MMM YYYY");
    },

    computedReleaseSerie() {
      return store.state.mediaDetails.first_air_date.slice(0, 4);
    },

    computedReleaseSerieFull() {
      const date = store.state.mediaDetails.next_episode_to_air.air_date;
      const dateFormat = moment(date, "YYYY-MM-DD");
      return dateFormat.format("Do MMM YYYY");
    },

    computedRuntimeMovie() {
      const hours = Math.floor(store.state.mediaDetails.runtime / 60);
      const minutes = store.state.mediaDetails.runtime % 60;
      const convertedTime = `${hours}h ${minutes}min`;

      return convertedTime;
    },

    computedRuntimeSerie() {
      const hours = Math.floor(
        store.state.mediaDetails.episode_run_time[0] / 60
      );
      const minutes = store.state.mediaDetails.episode_run_time[0] % 60;
      const convertedTime = `${hours}h ${minutes}min`;

      return convertedTime;
    },

    computedSimilar() {
      return store.state.similarMedia;
    }
  }
};
</script>
