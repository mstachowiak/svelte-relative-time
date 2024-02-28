<script lang="ts">
    import { onDestroy } from 'svelte'
    import { register, unregister } from './state'

    let {date, locale, live = true, class: klass = ''} = $props<{date: Date | number, locale: string, live?: boolean, class?: string}>();

    let instance = {};
    let text = $state('');

    register(instance, date, locale, live, value => (text = value));

    onDestroy(() => unregister(instance));
</script>

<span class={klass}>{text}</span>
