initSidebarItems({"enum":[["ErrorKind","Error kind which can be matched over."]],"fn":[["random","DEPRECATED: use `thread_rng().gen()` instead."],["sample","DEPRECATED: use `seq::sample_iter` instead."],["thread_rng","Retrieve the lazily-initialized thread-local random number generator, seeded by the system. Intended to be used in method chaining style, e.g. `thread_rng().gen::<i32>()`, or cached locally, e.g. `let mut rng = thread_rng();`."],["weak_rng","DEPRECATED: use [`SmallRng`] instead."]],"mod":[["distributions","Sampling from random distributions."],["jitter","Non-physical true random number generator based on timing jitter."],["mock","Mock random number generator"],["prng","Pseudo random number generators are algorithms to produce apparently random numbers deterministically, and usually fairly quickly."],["read","A wrapper around any Read to treat it as an RNG."],["seq","Functions for randomly accessing and sampling sequences."]],"struct":[["AsciiGenerator","Iterator which will continuously generate random ascii characters."],["EntropyRng","An interface returning random data from external source(s), provided specifically for securely seeding algorithmic generators (PRNGs)."],["Error","Error type of random number generators"],["Generator","Iterator which will generate a stream of random items."],["OsRng","A random number generator that retrieves randomness straight from the operating system."],["ReseedingRng","A wrapper around any PRNG which reseeds the underlying PRNG after it has generated a certain number of random bytes."],["SmallRng","An RNG recommended when small state, cheap initialization and good performance are required. The PRNG algorithm in `SmallRng` is chosen to be efficient on the current platform, without consideration for cryptography or security. The size of its state is much smaller than for [`StdRng`]."],["StdRng","The standard RNG. The PRNG algorithm in `StdRng` is chosen to be efficient on the current platform, to be statistically strong and unpredictable (meaning a cryptographically secure PRNG)."],["ThreadRng","The type returned by [`thread_rng`], essentially just a reference to the PRNG in thread-local memory."]],"trait":[["AsByteSliceMut","Trait for casting types to byte slices"],["BlockRngCore","A trait for RNGs which do not generate random numbers individually, but in blocks (typically `[u32; N]`). This technique is commonly used by cryptographic RNGs to improve performance."],["CryptoRng","A marker trait used to indicate that an [`RngCore`] or [`BlockRngCore`] implementation is supposed to be cryptographically secure."],["FromEntropy","A convenience extension to [`SeedableRng`] allowing construction from fresh entropy. This trait is automatically implemented for any PRNG implementing [`SeedableRng`] and is not intended to be implemented by users."],["Rand","A type that can be randomly generated using an [`Rng`]."],["Rng","An automatically-implemented extension trait on [`RngCore`] providing high-level generic methods for sampling values and other convenience methods."],["RngCore","The core of a random number generator."],["SeedableRng","A random number generator that can be explicitly seeded."]]});