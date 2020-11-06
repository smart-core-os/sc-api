<template>
  <div class="tween-example-light">
    <dl class="controls">
      <dt>Level</dt>
      <dd>
        <fieldset class="btn-group">
          <button v-for="(level, name) in config.levels" @click="target=level" :class="{active: level === target}">
            {{ name }} ({{ level }}%)
          </button>
        </fieldset>
      </dd>

      <dt>Duration</dt>
      <dd>
        <fieldset class="btn-group">
          <button v-for="(level, name) in config.durations" @click="duration=level"
                  :class="{active: level === duration}">
            {{ name }}
          </button>
        </fieldset>
      </dd>

      <dt class="action-header"><span>Update Request</span>
        <button @click="run">Run</button>
      </dt>
      <dd>
        <!-- this code is the same as a ```go block would be with the vars highlighted -->
        <div class="language-go code-sample">
          <!-- @formatter:off -->
          <pre class="language-go"><code>client<span
              class="token punctuation">.</span><span
              class="token function">UpdateBrightness</span><span
              class="token punctuation">(</span>ctx<span
              class="token punctuation">,</span> <span
              class="token operator">&</span>traits<span
              class="token punctuation">.</span>UpdateBrightnessRequest<span
              class="token punctuation">{</span>
  Name<span
              class="token punctuation">:</span> <span
              class="token string">"my-light"</span><span
              class="token punctuation">,</span>
  Brightness<span
              class="token punctuation">:</span> <span
              class="token operator">&</span>traits<span
              class="token punctuation">.</span>Brightness<span
              class="token punctuation">{</span>
    LevelPercent<span
              class="token punctuation">:</span> <span
              class="token number var">{{ target }}</span><span
              class="token punctuation">,</span><template v-if="duration > 0">
    BrightnessTween<span
              class="token punctuation">:</span> <span
              class="token operator">&</span>types<span
              class="token punctuation">.</span>Tween<span
              class="token punctuation">{</span>
      TotalDuration<span
              class="token punctuation">:</span> durationpb<span
              class="token punctuation">.</span><span
              class="token function">New</span><span
              class="token punctuation">(</span><span
              class="token number var">{{ duration / 1000 }}</span> <span
              class="token operator">*</span> time<span
              class="token punctuation">.</span>Second<span
              class="token punctuation">)</span><span
              class="token punctuation">,</span>
    <span
              class="token punctuation">}</span><span
              class="token punctuation">,</span></template>
  <span
              class="token punctuation">}</span><span
              class="token punctuation">,</span>
<span
              class="token punctuation">}</span><span
              class="token punctuation">)</span></code></pre>
        <!-- @formatter:on -->
        </div>
      </dd>

      <dt>Get Request</dt>
      <dd>
        <!-- this code is the same as a ```go block would be with the vars highlighted -->
        <div class="language-go code-sample">
          <!-- @formatter:off -->
          <pre class="language-go"><code>res<span
              class="token punctuation">,</span> <span
              class="token boolean">_</span> <span
              class="token operator">:=</span> client<span
              class="token punctuation">.</span><span
              class="token function">GetBrightness</span><span
              class="token punctuation">(</span>ctx<span
              class="token punctuation">,</span> <span
              class="token operator">&</span>traits<span
              class="token punctuation">.</span>GetBrightnessRequest<span
              class="token punctuation">{</span>
  Name<span
                class="token punctuation">:</span> <span
                class="token string">"my-light"</span>
<span
    class="token punctuation">}</span><span
                class="token punctuation">)</span>

fmt<span
                class="token punctuation">.</span><span
                class="token function">Printf</span><span
                class="token punctuation">(</span><span
                class="token string">"Current value %v"</span><span
                class="token punctuation">,</span> res<span
                class="token punctuation">.</span>LevelPercent<span
                class="token punctuation">)</span>
fmt<span
                class="token punctuation">.</span><span
                class="token function">Printf</span><span
                class="token punctuation">(</span><span
                class="token string">"Target value %v"</span><span
                class="token punctuation">,</span> res<span
                class="token punctuation">.</span>TargetLevelPercent<span
                class="token punctuation">)</span>
fmt<span
                class="token punctuation">.</span><span
                class="token function">Printf</span><span
                class="token punctuation">(</span><span
                class="token string">"Progress %+v"</span><span
                class="token punctuation">,</span> res<span
                class="token punctuation">.</span>BrightnessTween<span
                class="token punctuation">)</span>
<span class="token comment">// Outputs:</span>
<span class="token comment">// Current value: <span class="token var">{{ currentValue }}</span></span>
<span class="token comment">// Target value: <span class="token var">{{ duration === 0 ? 0 : end }}</span></span>
<template v-if="duration > 0"><span class="token comment">// Progress: { TotalDuration <span
                class="token var">{{ duration / 1000 }}s</span> Progress <span
                class="token var">{{ progress }}</span>}</span></template><template v-else><span
                class="token comment">// Progress: <span
                class="token var">nil</span></span></template></code></pre>
          <!-- @formatter:on -->
        </div>
      </dd>
    </dl>
    <div class="results">
      <svg viewBox="0 0 100 100">
        <g>
          <path :fill="bulbFill" d="M49.958,28.688c-9.278,0-16.804,7.525-16.804,16.81c0,3.056,0.857,5.898,2.24,8.391
		c4.126,7.438,5.221,11.613,5.896,15.654c0.564,3.387,1.344,4.174,3.902,4.174c1.091,0,2.869,0,4.766,0c1.901,0,3.683,0,4.767,0
		c2.563,0,3.344-0.787,3.907-4.174c0.677-4.043,1.771-8.219,5.896-15.654c1.388-2.492,2.24-5.334,2.24-8.391
		C66.771,36.212,59.245,28.688,49.958,28.688z"/>
          <path fill="#ccc" d="M55.971,74.934H43.958c-0.5,0-0.903,0.402-0.903,0.9v0.602c0,0.496,0.403,0.9,0.903,0.9h12.013
		c0.493,0,0.897-0.404,0.897-0.9v-0.602C56.87,75.336,56.464,74.934,55.971,74.934z"/>
          <path fill="#ccc" d="M55.971,78.537H43.958c-0.5,0-0.903,0.4-0.903,0.9v0.602c0,0.496,0.403,0.898,0.903,0.898h12.013
		c0.493,0,0.897-0.402,0.897-0.898v-0.602C56.87,78.938,56.464,78.537,55.971,78.537z"/>
          <path fill="#ccc" d="M55.971,82.141H43.958c-0.5,0-0.903,0.402-0.903,0.9v0.602c0,0.498,0.403,0.9,0.903,0.9h12.013
		c0.493,0,0.897-0.402,0.897-0.9v-0.602C56.87,82.543,56.464,82.141,55.971,82.141z"/>
          <path fill="#888"
                d="M45.458,85.744h9.013c0,1.801-2.406,3.002-4.513,3.002C47.861,88.746,45.458,87.545,45.458,85.744z"/>
          <path :fill="bulbRayFill" d="M69.264,16.854c1.532-2.683-2.605-5.092-4.15-2.414c-0.809,1.399-6.662,11.541-6.662,11.541l4.162,2.402
		c0,0,5.199-9.017,6.646-11.518c0.003-0.001,0.003-0.003,0.003-0.003L69.264,16.854L69.264,16.854z"/>
          <path :fill="bulbRayFill" d="M78.633,26.247L78.633,26.247L78.63,26.25c-0.008,0.001-0.008,0.001-0.008,0.001
		C76.51,27.472,67.456,32.7,67.456,32.7l2.397,4.16c0,0,9.076-5.239,11.188-6.458C83.727,28.854,81.316,24.713,78.633,26.247z"/>
          <path :fill="bulbRayFill" d="M52.452,11.071c0,0.729,0,12.812,0,12.812h-4.806c0,0,0-12.084,0-12.812
		C47.646,7.973,52.452,7.973,52.452,11.071z"/>
          <path :fill="bulbRayFill" d="M30.737,16.854c-1.532-2.683,2.606-5.092,4.152-2.414c0.808,1.399,6.661,11.541,6.661,11.541l-4.158,2.402
		c0,0-5.208-9.017-6.652-11.518c0-0.001,0-0.003,0-0.003L30.737,16.854L30.737,16.854z"/>
          <path :fill="bulbRayFill" d="M21.371,26.247L21.371,26.247v0.003c0.007,0.001,0.007,0.001,0.007,0.001
		c2.116,1.221,11.167,6.449,11.167,6.449l-2.402,4.16c0,0-9.076-5.239-11.187-6.458C16.273,28.854,18.683,24.713,21.371,26.247z"/>
        </g>
      </svg>

      <dl>
        <template v-if="duration > 0">
          <dt class="action-header"><span>Progress</span> <span v-if="start !== end">{{ start }}→{{ end }}</span></dt>
          <dd><input type="range" min="0" max="100" v-model="progress"></dd>
        </template>
      </dl>


      <p>Have a play setting the lights level and duration then click
        <button @click="run" class="small">Run</button>
        to watch how the device reacts. Running the
        update will tween from the current value (<code>{{ currentValue.toFixed(0) }}</code>) to the level you have
        selected <code>{{ target }}</code>.
      </p>

      <p>The Get Request shows the result you would get if you called Get at that point in time. You can control the
        tween progress manually using the progress bar above.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TweenExampleLight",
  data() {
    return {
      target: 70,
      duration: 3000,

      progress: 0,
      start: 0,
      end: 70,
      runCount: 0,

      config: {
        offColor: [220, 220, 220],
        onColor: [255, 251, 18],
        levels: {
          "Off": 0,
          "Low": 25,
          "OK": 70,
          "Full": 100
        },
        durations: {
          "None": 0,
          "1s": 1000,
          "3s": 3000,
          "10s": 10000
        }
      }
    };
  },
  computed: {
    bulbFillRgb() {
      const off = this.config.offColor;
      const on = this.config.onColor;
      return [
        off[0] + (on[0] - off[0]) * this.currentValue / 100,
        off[1] + (on[1] - off[1]) * this.currentValue / 100,
        off[2] + (on[2] - off[2]) * this.currentValue / 100
      ];
    },
    bulbFill() {
      return `rgb(${this.bulbFillRgb.join(',')})`;
    },
    bulbRayFill() {
      return `rgb(${this.bulbFillRgb.join(',')},${this.currentValue / 100})`;
    },
    currentValue() {
      if (this.progress === 100) {
        return this.end;
      }

      return this.start + (this.end - this.start) * this.progress / 100;
    }
  },
  methods: {
    run() {
      // for tracking change
      const id = ++this.runCount;
      const target = this.target;
      const duration = this.duration;

      if (target === this.currentValue) {
        // re-run
      } else {
        this.start = this.currentValue;
        this.end = this.target;
      }
      this.progress = 0;

      if (duration === 0) {
        this.progress = 100;
        return;
      }

      if (this.currentValue === target) {
        this.progress = 100;
        return; // nothing to do
      }

      const t0 = performance.now();

      const cb = time => {
        // check if we should still be running
        if (id !== this.runCount || this.end !== target || this.duration !== duration) {
          return; // not our turn to run anymore
        }

        const progress = (time - t0) / duration;
        if (progress >= 1) {
          // complete
          this.progress = 100;
          return;
        }
        this.progress = progress * 100;
        requestAnimationFrame(cb);
      };
      requestAnimationFrame(cb);
    }
  }
};
</script>

<style scoped>
.tween-example-light {
  display: flex;
  flex-direction: column;
}

.results {
  flex: 1 1 auto
}

.code-sample {
  max-width: 100%;
}

@media all and (min-width: 1024px) {
  .code-sample {
    max-width: 25em;
  }

  .tween-example-light {
    flex-direction: row;
  }

  .results {
    margin-left: 2em;
  }
}

.token.var {
  font-weight: bold;
  border: 1px solid #fff;
  padding: 0.1em 0.4em;
  border-radius: 3px;
}

svg {
  min-width: 200px;
  max-height: 500px;
}

dl {
  margin: 0;
  padding: 0;
}

dd, dt {
  padding: 0;
  margin: 0;
}

dt {
  margin-bottom: 0.5em;
  margin-left: 4px;
}

dt.action-header {
  display: flex;
  align-items: baseline;
}

dt.action-header > :first-child {
  flex: 1 1 auto;
}

dd ~ dt {
  margin-top: 1em;
}

.btn-group {
  display: flex;
  justify-items: stretch;
  padding: 0;
  border: none;
}

button {
  border: 1px solid #aaa;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 0.5em 1em;
  color: inherit;
}

button.small {
  padding: 0.2em 0.7em;
}

.btn-group button {
  flex: 1 0 5em;
  border-radius: 0;
  padding: 1em;
  margin-right: -1px;
  transition: background-color 200ms ease-out;
}

.btn-group button:first-child {
  border-radius: 4px 0 0 4px;
}

.btn-group button:last-child {
  border-radius: 0 4px 4px 0;
}

.btn-group button.active {
  background: #ffac3a;
  z-index: 1;
}

input[type=range] {
  width: 100%;
}
</style>
